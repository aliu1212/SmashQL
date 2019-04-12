const ProSmasher = require('./prosmasher.model');

const prosmasher = (_, args) => {
  ProSmasher.findOne({ where: { id: args.id }})
    .then(pro => {
      return pro;
    })
}

const prosmashers = () => {
  ProSmasher.findAll()
    .then(pros => {
      return pros;
    })
}

module.exports = {
  Query: {
    prosmashers,
    prosmasher,
  }
}