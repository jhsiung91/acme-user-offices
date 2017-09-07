const db = require('./db')

const Office = db.define('office', {
	name:{
		type: db.Sequelize.STRING,
		allowNull: false
	},
	lat:{
		type: db.Sequelize.FLOAT
	},
	lng:{
		type: db.Sequelize.FLOAT
	}
})

module.exports = Office