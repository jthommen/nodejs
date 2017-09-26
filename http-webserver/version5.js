var express = require('express');

// Create express app that returns function
var app = express();

// use port variable or set default
var port = process.env.PORT || 3000; 

// Static Files served via express middleware
app.use('/assets', express.static(__dirname + '/public'));

// Own middleware possible
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

// Dynamic routes with pattern matching & params
app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id });
});

app.get('/json', function(req, res){
   res.json({ firstname: 'John', lastname: 'Doe' }); 
});

// Creates HTTP Server on Port
app.listen(port);
