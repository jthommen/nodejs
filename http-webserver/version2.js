// Building a Webserver 2.0

// 1.0 Basic setup
// 2.0 static file serving

var http = require('http');
var fs = require('fs');

// creates server object that takes in function which is an event emitter
http.createServer(function(req, res){ //request is not further processed here

    // function is run when a req causes an event emit
    res.writeHead(200, { 'Content-Type' : 'text/html' }); // arguments are status, headers
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8'); // get index.html from file system
    var message = 'Hello there!!'; // define template value
    html = html.replace('{Message}', message); // replace template placeholder with value
    res.end(html); // return string
    
    // Specifying the port & address to map the server object to
}).listen(1337, '127.0.0.1');
