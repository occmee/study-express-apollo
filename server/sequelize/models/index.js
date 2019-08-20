const sequelize = require('../config')
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

sequelize.sync();

module.exports = {
  User,
  Post,
  Comment,
}
