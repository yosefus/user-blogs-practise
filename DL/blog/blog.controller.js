const BlogModel = require("./blog.model")

const model = BlogModel

const read = async (filter = {}, proj) => await model.find(filter, proj)
const readOneById = async (id, proj) => await model.findById(id, proj)
const updateOneById = async (id, newData) => await model.findByIdAndUpdate(id, newData, { new: true })
const create = async (data) => await model.create(data)
const del = async (id) => await model.findByIdAndUpdate(id, { isActive: false })

module.exports = {
   read,
   readOneById,
   updateOneById,
   create,
   del,
}