const express = require('express');
const path = require('path');
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express');
const { schemaLoader } = require('./util.js');
const character = require('../db/types/character/character.resolvers')
const hrsmasher = require('../db/types/hrsmasher/hrsmasher.resolvers')
const prosmasher = require('../db/types/prosmasher/prosmasher.resolvers')
const { merge } = require('lodash');

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

    const app = express();
    const PORT = 1025;
    app.use(express.static(path.join(__dirname + '/../client/dist/')))
    app.use(cors());
    
    server.applyMiddleware({ app, path: '/' });
    
    app.listen(PORT, () => {
      console.log(`🚀  Server ready at ${PORT}`)
    })
  }
} 