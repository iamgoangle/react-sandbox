const express = require('express'),
	router = require('./router'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose')

const config = {
	database: 'mongodb://localhost/27017/golfdb',
	port: 8080
}

/* ====================================
	Database setup
==================================== */
mongoose.connect(config.database)

/* ====================================
	Express server
==================================== */
// Import routes to be served
let app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())
router(app)

// Start the server
app.listen(config.port)
console.log('Your server is running on port ' + config.port + '.')
