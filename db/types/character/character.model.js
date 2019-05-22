const Sequelize = require('sequelize');
const sequelize = require('../../index');

const Character = sequelize.define('character', {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false },
  weight: { type: Sequelize.INTEGER, allowNull: false },
  pic_url: { type: Sequelize.STRING, allowNull: false },
  big_url: { type: Sequelize.STRING, allowNull: false },
  zero_rank: { type: Sequelize.STRING, allowNull: false },
  esam_rank: { type: Sequelize.STRING, allowNull: false },
  leffen_rank: { type: Sequelize.STRING, allowNull: false },
},
{
  timestamps: false,
});

module.exports = Character;