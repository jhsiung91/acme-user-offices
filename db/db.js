const Sequelize = require('Sequelize');

const db = new Sequelize(process.env.DATABASE_URL,{logging:true}); //process.env.DATABASE_URL

module.exports = db;