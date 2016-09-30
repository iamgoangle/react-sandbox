import Product from "../models/products"

class ProductServices {
	constructor () {

	}

	getAllTodos (req, res) {
		res.header("Access-Control-Allow-Origin", "*")
  		res.header("Access-Control-Allow-Headers", "X-Requested-With")

		try {
			Product.find({}).exec(function(err, products){
				if (err) {
					throw err
				} else {
					res.json(products)
				}
			})
		} catch (err) {
			console.error(err)
		}
	}

	addProduct (req, res) {
		try {

		} catch (err) {
			console.error(err)
		}
	}
}

export default ProductServices
