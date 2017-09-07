const db = require('./db')

const User = db.define('user',{
	name:{
		type: db.Sequelize.STRING,
		allowNull: false,
		validate: {notEmpty: true}
	}
})

module.exports = User