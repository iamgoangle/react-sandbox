//server router.js

//import dependencies
const express = require('express')

// import controllers
const productsController = require('./controllers/productsController')

module.exports = function(app) {
	const productRoutes = express.Router();
	apiRoutes.use('/tickets', ticketRoutes);

	//==================
	// TICKET ROUTES
	//==================
	app.use('/tickets', apiRoutes);
}
