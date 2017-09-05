const conn = require('./db')
const User = require('./User')
const Office = require('./Office')

User.belongsTo(Office)
Office.hasMany(User)

module.exports = {
  models: {
    User,
    Office
  }
}