const conn = require('./db')

const User = conn.define('user',{
	name:{
		type: conn.Sequelize.STRING,
		allowNull: false,
		validate: {notEmpty: true}
	}
})

module.exports = User