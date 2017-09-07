const db = require('./db')
const User = require('./User')
const Office = require('./Office')

User.belongsTo(Office)
Office.hasMany(User)

const sync = ()=>{
	return db.sync({force:true})
}

const seed = ()=>{
	return Promise.all([
		User.create({name: 'jerry'}),
		User.create({name: 'jack'}),
		User.create({name: 'john'}),
		Office.create({name: 'room 1', lat: 100.1, lng: 100.1}),
		Office.create({name: 'room 2', lat: 300.3, lng: 300.3})
	])
	.then(([u1,u2,u3,o1,o2])=>{
		return Promise.all([
			o1.addUser([u1])
		])
	})
}

module.exports = {
  sync,
  seed,
  models: {
    User,
    Office
  }
}