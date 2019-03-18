const Sequelize = require('sequelize');
const sequelize = require('./index');

const Character = sequelize.define('character', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false },
  weight: { type: Sequelize.INTEGER, allowNull: false },
  pic_url: { type: Sequelize.STRING, allowNull: false },
  zero_rank: { type: Sequelize.STRING, allowNull: false },
  esam_rank: { type: Sequelize.STRING, allowNull: false },
},
{
  timestamps: false,
});

const ProSmasher = sequelize.define('prosmasher', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false },
  pic_url: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  main: { type: Sequelize.STRING, allowNull: false },
},
{
  timestamps: false,
});

const HRSmasher = sequelize.define('hrsmasher', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false },
  pic_url: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  main: { type: Sequelize.STRING, allowNull: false },
},
{
  timestamps: false,
});

const Special = sequelize.define('special', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false },
},
{
  timestamps: false,
});

Special.belongsTo(Character);
Character.hasMany(Special);

sequelize.sync({ force: false })
  .then(() => console.log('synced with database'))
  .catch(err => console.error('error syncing database', err));

module.exports = { Character, Special, HRSmasher, ProSmasher };
