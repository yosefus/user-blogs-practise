
require('dotenv').config()
const express = require('express')
const app = express()

const { connectToBb } = require('./DL/db')
connectToBb()

const { register, updateUser, login, deleteUser } = require('./BL/user.service')
const { createBlog, updateBlog } = require('./BL/blog.servise')

app.use(express.json())
app.use((req, res, next) => {
   console.log(req.path)
   // get user by token
   req.user = {
      "_id": "6439030e203f6c3e08538db9",
      "name": "meir",
      "email": "r@r",
      "password": "1234",
      "isActive": true,
      "__v": 0
   }
   next()
})

app.post('/api/user/register', async (req, res) => {
   try {
      const newUser = await register(req.body)
      res.send(newUser)
   } catch (error) {
      res.status(500).send(error?.message || error)
   }
})

app.put('/api/user/update/:id', async (req, res) => {
   try {
      const { body, params } = req
      const updatedUser = await updateUser(params.id, body)
      res.send(updatedUser)
   } catch (error) {
      res.status(500).send(error?.message || error)
   }
})

app.delete('/api/user/delete/:id', async (req, res) => {
   try {
      const deletedUser = await deleteUser(req.params.id)
      res.send(deletedUser)
   } catch (error) {
      res.status(500).send(error?.message || error)
   }
})


app.post('/api/user/login', async (req, res) => {
   try {
      const { body, query, user } = req
      const u = await login(body)
      res.send(u)
   } catch (error) {
      res.status(500).send(error?.message || error)
   }
})

// blogs =>

// /api/blog/create POST
app.post('/api/blog/create', async (req, res) => {
   try {
      const { body, user } = req
      const newBlog = await createBlog(body, user._id)
      res.send(newBlog)
   } catch (error) {
      res.status(500).send(error?.message || error)
   }
})

// /api/blog/update/:id PUT
app.put('/api/blog/update/:id', async (req, res) => {
   try {
      const { body, params, user } = req
      const newBlog = await updateBlog(params.id, body, user._id)
      res.send(newBlog)
   } catch (error) {
      res.status(500).send(error?.message || error)
   }
})

// /api/blog/delete/:id DELETE

// /api/blog/read-with-filter GET
// /api/blog/read-with-filter?title=how

// /api/blog/read-one/:id GET




// users

// blogs >> user

// comments >> user >> blogs


app.listen(3000, () => console.log('server runing on port 3000'))
