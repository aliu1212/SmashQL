import Character from './character.model'

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

export default {
  Query: {
    characters,
    character
  },
  // Mutation: {
  //   newComment,
  // }
}