var express = require('express');
var app = express();
var config = require('./config'); // require db config
var mongoose = require('mongoose');

// Require controllers
var setupController = require('./controllers/setupController');

var port  = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// Connect to DB
mongoose.connect(config.getDbConnectionString());

// Add endpoint to express app
setupController(app);

app.listen(port);