const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
   creatorId: { type: mongoose.Types.ObjectId, ref: 'users' },
   bolgId: { type: mongoose.Types.ObjectId, ref: 'blogs' },
   content: { type: String },
   isActive: { type: Boolean, default: true }
})


const CommentModel = mongoose.model('comments', CommentSchema)
module.exports = CommentModel