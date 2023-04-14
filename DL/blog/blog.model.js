const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
   creatorId: { type: mongoose.Types.ObjectId, ref: 'users' },
   title: { type: String },
   content: { type: String },
   numberOfViews: { type: Number },
   image: { type: String },
   isActive: { type: Boolean, default: true }
})

// without populate

// const a = {
//    creatorId: '9878784545',
//    isActive: true
// }

// with populate

// const b = {
//    creatorId: {
//       _id: '9878784545',
//       name: 'moshe',
//       email: 'a@a',
//       password: 'jjj',
//       gender: 'male',
//       isActive: true,
//    },
//    isActive: true
// }

const BlogModel = mongoose.model('blogs', BlogSchema)
module.exports = BlogModel