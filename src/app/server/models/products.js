const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = new Schema ({
	id: {type: Number, required: true, unique: true},
	title: {type: String, required: true},
	desc: {type: String, required: true},
	sku: {type: String, required: true},
	price: {type: Number, required: true},
	concurrency: {type: String},
	thumbnail: {type: String}
})

module.exports = mongoose.model('products', ProductSchema)
