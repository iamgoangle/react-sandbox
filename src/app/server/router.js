//server router.js

//import dependencies
const express = require('express')

// import controllers
const productsController = require('./controllers/productsController')

module.exports = function(app) {
	const productRoutes = express.Router();

	//==================
	// TICKET ROUTES
	//==================
	apiRoutes.use('/tickets', productRoutes);
	productRoutes.post('/create-new-ticket', requireAuth, productsController.createTicket);
	app.use('/api', apiRoutes);
}
