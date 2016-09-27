import Product from "../models/products"

class ProductServices {
	constructor () {

	}

	getAllProducts (req, res) {
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
}

export default ProductServices
