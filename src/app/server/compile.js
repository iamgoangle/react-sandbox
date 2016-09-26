'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _router = require('../router');

var _router2 = _interopRequireDefault(_router);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import config from './config/main'

var config = {
	database: 'mongodb://http://localhost/27017/golfdb',
	port: 8080
};

/* ====================================
	Database setup
==================================== */
_mongoose2.default.connect(config.database);

/* ====================================
	Express server
==================================== */
// Import routes to be served
var app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());
(0, _router2.default)(app);

// Start the server
app.listen(config.port);
console.log('Your server is running on port ' + config.port + '.');
