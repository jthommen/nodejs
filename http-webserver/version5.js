var express = require('express');

// Create express app that returns function
var app = express();

// use port variable or set default
var port = process.env.PORT || 3000; 

// Static Files served via express middleware
app.use('/assets', express.static(__dirname + '/public'));

// Maps requet type to url and fires callback
app.get('/', function(req, res){
    res.send('<html><head><title>Hello</title></head><body><h1>Hello there!</h1></body></html>')
});

// Dynamic routes with pattern matching & params
app.get('/person/:id', function(req, res){
    res.send('<html><head><link href="/assets/style.css" type="text/css" rel="stylesheet"/><title>Hello</title></head><body><h1>Hello ' + req.params.id +'!</h1></body></html>')
});

app.get('/json', function(req, res){
   res.json({ firstname: 'John', lastname: 'Doe' }); 
});


// Creates HTTP Server on Port
app.listen(port);