const Sequelize = require('sequelize');
const sequelize = require('../config');
const User = require('./user');
const Post = require('./post');

class Comment extends Sequelize.Model { }
Comment.init({
  content: Sequelize.STRING,
  postId: {
    type: Sequelize.INTEGER,
    references: {
      model: Post,
      key: 'id',
    }
  },
  postedBy: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
    }
  },
}, { sequelize, modelName: 'comment', paranoid: true });

module.exports = Comment;
