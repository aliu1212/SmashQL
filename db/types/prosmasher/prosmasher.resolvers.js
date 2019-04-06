import ProSmasher from './prosmasher.model';

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

export default {
  Query: {
    prosmashers,
    prosmasher,
  }
}