// Building a Webserver 4.0

// 1.0 Basic setup
// 2.0 Static file serving
// 3.0 Streaming response
// 4.0 Outputting JSON

var http = require('http');
var fs = require('fs');

// creates server object that takes in function which is an event emitter
http.createServer(function(req, res){ //request is not further processed here

    // function is run when a req causes an event emit
    res.writeHead(200, { 'Content-Type' : 'application/json' }); // arguments are status, headers

    var obj = {
        firstname: 'Juri',
        lastname: 'Thommen'
    };
    res.end(JSON.stringify(obj));

    // Specifying the port & address to map the server object to
}).listen(1337, '127.0.0.1');