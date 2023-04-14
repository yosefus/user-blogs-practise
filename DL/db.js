const mongoose = require('mongoose')

const connectToBb = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URL)
      console.log('conected to db');
   } catch (error) {
      console.log('not conected to db', error.message || error);
   }
}

module.exports = { connectToBb }