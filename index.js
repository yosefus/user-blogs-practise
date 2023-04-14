
require('dotenv').config()
const express = require('express')
const app = express()

const { connectToBb } = require('./DL/db')
connectToBb()

const { register, updateUser, login, deleteUser } = require('./BL/user.service')

app.use(express.json())

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
      const { body, query } = req
      console.log(query);
      const u = await login(body)
      res.send(u)
   } catch (error) {
      res.status(500).send(error?.message || error)
   }
})

// blogs =>

// /api/blog/create POST

// /api/blog/update/:id PUT

// /api/blog/delete/:id DELETE

// /api/blog/read-with-filter GET
// /api/blog/read-with-filter?title=how

// /api/blog/read-one/:id GET




// users

// blogs >> user

// comments >> user >> blogs


app.listen(3000, () => console.log('server runing on port 3000'))
