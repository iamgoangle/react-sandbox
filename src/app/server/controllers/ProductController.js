import mongoose from 'mongoose'
import _ from "underscore"
import express from 'express'

// Inject service
import ProductServices from '../services/ProductServices'

// Instance object
let _ProductServices = new ProductServices()

const ProductRouter = express.Router()

ProductRouter.get('/', function (req, res, next) {
	_ProductServices.getAllProducts(req, res)
})

// To create new entity
ProductRouter.put('/addProduct', function (req, res, next) {
	// _ProductServices.addProduct()
})

module.exports = ProductRouter
