const dotenv = require("dotenv").config();
const knex = require("knex");

var options = {
  development: {
      client: 'pg',
      connection: {
        host : '127.0.0.1',
        user : process.env.DB_USER,
        password : process.env.DB_PW,
        database : process.env.DB_NAME
      }
  },
  migrations: {
      tableName: 'knex_migrations'
    },
  seeds: {
    directory: './seeds'
  }
};

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = config;
