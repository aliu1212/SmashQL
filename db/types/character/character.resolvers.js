const Character = require('./character.model')

const character = (_, args) => {
  Character.findOne({ where: { id: args.id }})
    .then(char => {
      return char;
    })
}

const characters = () => {
  Character.findAll()
    .then(chars => {
      return chars;
    })
}

module.exports = {
  Query: {
    characters,
    character
  },
  // Mutation: {
  //   newComment,
  // },
  Character: {
    __resolveType(character) {
      return character;
    },
  }
}