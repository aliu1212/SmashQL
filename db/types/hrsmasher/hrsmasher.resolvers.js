const HRSmasher = require('./hrsmasher.model')

const hrsmasher = (_, args) => {
  HRSmasher.findOne({ where: { id: args.id }})
    .then(hr => {
      return hr;
    })
}

const hrsmashers = () => {
  HRSmasher.findAll()
    .then(hrs => {
      return hrs;
    })
}

module.exports = {
  Query: {
    hrsmashers,
    hrsmasher
  },
  // Mutation: {
  //   newComment,
  // }
}