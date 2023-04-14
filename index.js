
require('dotenv').config()
const express = require('express')
const app = express()

const { connectToBb } = require('./DL/db')
connectToBb()

const { register } = require('./BL/user.service')

app.use(express.json())

app.post('/api/register', async (req, res) => {
   try {
      const newUser = await register(req.body)
      res.send(newUser)
   } catch (error) {
      res.status(500).send(error?.message || error)
   }
})

// update
// delete
// login




// users

// blogs >> user

// comments >> user >> blogs


app.listen(3000, () => console.log('server runing on port 3000'))
