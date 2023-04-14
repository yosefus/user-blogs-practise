const { create, del, read, readOneById, updateOneById } = require('../DL/blog/blog.controller')


const createBlog = async (data, userId) => {
   const newBlog = await create({ ...data, creatorId: userId })
   return newBlog
}

const updateBlog = async (id, newData, userId) => {

   const found = await readOneById(id)
   if (String(found.creatorId) !== userId) throw 'not yours'


   const updatedBlog = await updateOneById(id, newData)
   return updatedBlog
}

module.exports = { createBlog, updateBlog }