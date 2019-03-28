const graphql = require('graphql');
const { Character, Special, HRSmasher, ProSmasher } = require('./models');

//This file replaces what would be 'dbHelpers'

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const CharacterType = new GraphQLObjectType({
  name: 'character',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    weight: { type: GraphQLInt },
    pic_url: { type: GraphQLString },
    big_url: { type: GraphQLString },
    zero_rank: { type: GraphQLString },
    esam_rank: { type: GraphQLString },
  })
});

const ProSmasherType = new GraphQLObjectType({
  name: 'prosmasher',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    pic_url: { type: GraphQLString },
    description: { type: GraphQLString },
    // main: {
    //   type: CharacterType,
    //   resolve(parent, args){
    //     //return Character.find(parent.main);
    //   }
    // },
    main: [CharacterType],
  })
});

const HRSmasherType = new GraphQLObjectType({
  name: 'hrsmasher',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    pic_url: { type: GraphQLString },
    description: { type: GraphQLString },
    // main: {
    //   type: CharacterType,
    //   resolve(parent, args){
    //     //return Character.find(parent.main);
    //   }
    // },
    main: [CharacterType],
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    character: {
      type: CharacterType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args){
          //return \
      }
    },
    prosmasher: {
      type: ProSmasherType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args){
          //return 
      }
    },
    hrsmasher: {
      type: HRSmasherType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args){
          //return 
      }
    },
    characters: {
      type: new GraphQLList(CharacterType),
      resolve(parent, args){
          //return ;
      }
    },
    prosmashers: {
        type: new GraphQLList(ProSmasherType),
        resolve(parent, args){
            //return ;
        }
    },
    hrsmashers: {
      type: new GraphQLList(HRSmasherType),
      resolve(parent, args){
          //return ;
      }
    },
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});