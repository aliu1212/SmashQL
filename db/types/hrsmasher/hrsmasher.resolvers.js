const HRSmasher = require('./hrsmasher.model')

const hrsmasher = (parent, args) => {
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

const newhr = (parent, args) => {
  return HRSmasher.create({ ...args.input })
}

module.exports = {
  Query: {
    hrsmashers,
    hrsmasher
  },
  Mutation: {
    newhr,
  }
}