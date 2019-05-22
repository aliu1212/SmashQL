const Character = require('./character.model')

const character = (parent, args) => {
  return Character.findOne({ where: { id: args.id }})
    .then(char => {
      return char.dataValues;
    })
}

const characters = () => {
  return Character.findAll()
    .then(chars => {
      return chars;
    })
}

const newchar = (parent, args) => {
  return Character.create({ ...args.input })
}

module.exports = {
  Query: {
    characters,
    character
  },
  Mutation: {
    newchar,
  },
  Character: {
    __resolveType(character) {
      return character;
    },
  }
}