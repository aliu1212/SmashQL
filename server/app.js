const { ApolloServer } = require('apollo-server');
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
    
    server.listen({ port: 1025 }).then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`)
    });
  }
} 