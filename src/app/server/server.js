import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"

import { config } from "../config/server.conf.js"

/******************************
	Controllers
*******************************/
import ProductController from "./controllers/ProductController"

/*******************************
	Express request pipeline
********************************/
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Binding the server routing
app.use(config.API.products, ProductController)

app.listen(config.SERVER.PORT, function () {
	console.log("Started listening on port", config.SERVER.PORT);
})

/******************************
	Connect to mongodb database
*******************************/
mongoose.connect(config.DATABASE.HOST)
