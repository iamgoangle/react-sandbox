import mongoose from 'mongoose'
import _ from "underscore"
import express from 'express'

// Inject service
import ProductServices from '../services/ProductServices'

// Instance object
const _ProductServices = new ProductServices()

const ProductRouter = express.Router()

ProductRouter.get('/', function (req, res, next) {
	_ProductServices.getAllProducts(req, res)
})

module.exports = ProductRouter
