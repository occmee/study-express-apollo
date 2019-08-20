const Sequelize = require('sequelize');
const sequelize = require('../config');
const User = require('./user');

class Post extends Sequelize.Model { }
Post.init({
  title: Sequelize.STRING,
  content: Sequelize.STRING,
  postedBy: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
    }
  },
}, { sequelize, modelName: 'post', paranoid: true });

// sequelize.sync()
//   .then(() => Post.create({
//     title: 'ほげ',
//     content: 'aaa',
//   }))
//   .then(post => {
//     console.log(post.toJSON());
//   });

module.exports = Post;
