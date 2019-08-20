const Sequelize = require('sequelize');

require('dotenv').config();
const dbname = process.env.MYSQL_DATABASE || 'sample';
const dbuser = process.env.MYSQL_USER || 'user';
const dbpass = process.env.MYSQL_PASSWORD || 'pass';

const options = {
  host: '127.0.0.1',
  dialect: 'mysql',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
  // dialectOptions: {
  //   decimalNumbers: true
  // }
};
module.exports = new Sequelize(dbname, dbuser, dbpass, options);
