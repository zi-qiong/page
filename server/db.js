const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', { useMongoClient: true })
const db = mongoose.connection
db.once('error', () => console.log('Mongo connect error'))
db.once('open', () => console.log('Mongo connection successed'))

const loginSchema = mongoose.Schema({
  username: String,
  password: String
})

const Models = {
  Login: mongoose.model('Login', loginSchema)
}

module.exports = Models;
