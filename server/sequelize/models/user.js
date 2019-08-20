const Sequelize = require('sequelize');
const sequelize = require('../config')

class User extends Sequelize.Model { }
User.init({
  account: Sequelize.STRING,
  nickname: Sequelize.STRING
}, { sequelize, modelName: 'user', paranoid: true });

// sequelize.sync()
//   .then(() => User.create({
//     account: 'janedoe',
//     nickname: 'janedoe',
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });

module.exports = User;
