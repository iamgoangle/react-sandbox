import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import path from "path"

/******************************
	Controllers
*******************************/
import ProductController from "./controllers/ProductController"

const config = {
	DB_HOST: "mongodb://localhost/golfdb",
	EXPRESS_PORT: 7777,
	API_PATHNAME: {
		products: '/api/products'
	}
}

/*******************************
	Express request pipeline
********************************/
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Binding the server routing
app.use(config.API_PATHNAME.products, ProductController)

app.listen(config.EXPRESS_PORT, function () {
	console.log("Started listening on port", config.EXPRESS_PORT);
})

/******************************
	Connect to mongodb database
*******************************/
mongoose.connect(config.DB_HOST)
