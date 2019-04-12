const Sequelize = require('sequelize');
const sequelize = require('../../index');

const HRSmasher = sequelize.define('hrsmasher', {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false },
  pic_url: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.TEXT, allowNull: false },
  main: { type: Sequelize.ARRAY(Sequelize.STRING), allowNull: false },
},
{
  timestamps: false,
});

module.exports = { HRSmasher };