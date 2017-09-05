const conn = require('./db')

const Office = conn.define('office', {
	name:{
		type: conn.Sequelize.STRING,
		allowNull: false
	},
	lat:{
		type: conn.Sequelize.FLOAT
	},
	lng:{
		type: conn.Sequelize.FLOAT
	}
})

module.exports = Office