var express = require('express');
var app = express();
var config = require('./config'); // require db config
var mongoose = require('mongoose');

// Require controllers
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port  = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public/dist'));

app.set('view engine', 'ejs');

// Connect to DB
mongoose.connect(config.getDbConnectionString());

// Add endpoints to express app
setupController(app);
apiController(app);

app.listen(port);