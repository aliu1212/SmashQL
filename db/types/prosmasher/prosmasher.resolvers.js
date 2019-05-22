const ProSmasher = require('./prosmasher.model');

const prosmasher = (parent, args) => {
  return ProSmasher.findOne({ where: { id: args.id }})
    .then(pro => {
      return pro;
    })
}

const prosmashers = () => {
  return ProSmasher.findAll()
    .then(pros => {
      return pros;
    })
}

const newpro = (parent, args) => {
  return ProSmasher.create({ ...args.input })
}

module.exports = {
  Query: {
    prosmashers,
    prosmasher,
  },
  Mutation: {
    newpro
  }
}