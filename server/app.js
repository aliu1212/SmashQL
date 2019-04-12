// const express = require('express');
// const path = require('path');
// const parser = require('body-parser');
// const cors = require('cors');
// const router = require('./router');
// const graphqlHTTP = require('express-graphql');
// const schema = require('../db/schema');
const { ApolloServer } = require('apollo-server');
const { schemaLoader } = require('./util.js');
const character = require('../db/types/character/character.resolvers')
const hrsmasher = require('../db/types/hrsmasher/hrsmasher.resolvers')
const prosmasher = require('../db/types/prosmasher/prosmasher.resolvers')
const { merge } = require('lodash');

// const app = express();

// app.use(cors());
// app.use(parser.json());
// app.use(parser.urlencoded({ extended: true }));

module.exports = {

  start : async () => {
    const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
    `
    const types = ['character', 'hrsmasher', 'prosmasher'];
    const schemaTypes = await Promise
      .all(types.map(oneType => {
        return schemaLoader(oneType);
      }))
      .catch(err => {
        console.log('ERROR', err)
      })
    
    const server = new ApolloServer({
      typeDefs: [rootSchema, ...schemaTypes],
      resolvers: merge({}, character, hrsmasher, prosmasher),
    })
    
    server.listen({ port: 1025 }).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`)
    });
  }
} 
// app.use('/api', router);
// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }));

// app.use(express.static(path.join(__dirname, '../client/dist')));

// module.exports = app;
