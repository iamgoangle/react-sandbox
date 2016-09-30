const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema ({
	id: {type: Number, required: true, unique: true},
	name: {type: String, required: true},
	status: {type: String, required: true}
})

module.exports = mongoose.model('todos', TodoSchema)
