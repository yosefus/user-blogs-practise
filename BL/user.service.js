


const { create, read, readOne, updateOneById, del } = require("../DL/user/user.controller")

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

const updateUser = async (id, newUser) => {
   // validations
   // if (newUser.permission) throw ""
   return await updateOneById(id, newUser)
}
const deleteUser = async (id, newUser) => {
   return await del(id, newUser)
}

const login = async (data) => {
   const found = await readOne({ email: data.email }, '+password')
   if (!found || found.password !== data.password) throw 'user not found'
   return found
}

module.exports = { register, updateUser, deleteUser, login }