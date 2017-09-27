var express = require('express');

// Create express app that returns function
var app = express();

// Require controller modules
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

// use port variable or set default
var port = process.env.PORT || 3000; 

// Static Files served via express middleware
app.use('/assets', express.static(__dirname + '/public'));

// Own middleware possible:
app.use('/', function(req, res, next){
    console.log('Request Url: ' + req.url);
    next();
});

// Templating engine for express js: ejs
app.set('view engine', 'ejs');

// Maps requet type to url and fires callback
app.get('/', function(req, res){
    res.render('index');
});

// Gives the controller the main app object
htmlController(app);
apiController(app);

// Creates HTTP Server on Port
app.listen(port);
