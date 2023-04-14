const UserModel = require("./user.model");
const model = UserModel

const read = async (filter = {}, proj) => await model.find(filter, proj)
const readOne = async (filter = {}, proj) => await model.findOne(filter, proj)
const readOneById = async (id, proj) => await model.findById(id, proj)
const updateOneById = async (id, newData) => await model.findByIdAndUpdate(id, newData, { new: true })
const create = async (data) => await model.create(data)
const del = async (id) => await model.findByIdAndUpdate(id, { isActive: false })

module.exports = {
   read,
   readOne,
   readOneById,
   updateOneById,
   create,
   del,
}