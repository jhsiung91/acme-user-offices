const Sequelize = require('Sequelize');

const conn = new Sequelize(process.env.DATABASE_URL,{logging:true}); //process.env.DATABASE_URL

module.exports = conn;