const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   name: { type: String },
   email: { type: String, equired: true, unique: true },
   password: { type: String, select: false },
   gender: { type: String },
   isActive: { type: Boolean, default: true }
})

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel