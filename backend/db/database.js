require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USER_NAME,
    port: process.env.DB_PORT,
    password: process.env.PASSWORD,
    database: process.env.DATA_BASE,
    host: process.env.HOST,
    dialect: 'postgres'
  }
}