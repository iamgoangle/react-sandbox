// var mongoose = require("mongoose")
import mongoose from 'mongoose'
import Product from "../models/products"
import _ from "underscore"

var router = require("express").Router()
// router.route("/Products/:id?")
router.route("/Products")
.get(getProducts)
// .post(addProduct)
// .delete(deleteProduct)

function getProducts(req, res) {
	// try{
		Product.find({}).exec(function(err, products){
			if (err) {
				console.log(err);
			} else {
				res.json(products);
			}
		})
	// } catch(err) {
	// 	console.log(err);
	// }
}

module.exports = router;
