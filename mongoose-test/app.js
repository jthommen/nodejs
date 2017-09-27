var express = require('express');

// Create express app that returns function
var app = express();

/////////////////////////////
// Mongoose Application
/////////////////////////////

// mongoDB module mongoose
var mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://juri:<password>@ds147454.mlab.com:47454/mongoose-dev');
// Schema construction
var Schema = mongoose.Schema;

// Defining specific schema
var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

// Defining a person entity
var Person = mongoose.model('Person', personSchema);

// Creating new person entity
var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main St.' 
});

// Save the person
john.save(function(err) {
    if(err) throw err;
    console.log('person saved');
});

/////////////////////////////
/////////////////////////////

// Require controller modules
var htmlController = require('./controllers/htmlController');

// use port variable or set default
var port = process.env.PORT || 3000; 

// Static Files served via express middleware
app.use('/assets', express.static(__dirname + '/public'));

// Own middleware possible:
app.use('/', function(req, res, next){
    console.log('Request Url: ' + req.url);

    // Get all the users put query in {}
    Person.find({}, function(err, users){ //asking to find all entities with person model from mongoose
        if(err) throw err;

        console.log(users);
    });

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

// Creates HTTP Server on Port
app.listen(port);
