


const { create, read, readOne } = require("../DL/user/user.controller")

const u = {
   name: '',
   email: '',
   password: ''
}

const register = async (user) => {
   const found = await readOne({ email: user.email })
   if (found) throw 'duplicate email'
   const newUser = await create(user)
   return newUser
}

module.exports = { register }