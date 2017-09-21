// Building a Webserver 1.0

// 1.0 Basic setup

var http = require('http');

// creates server object that takes in function which is an event emitter
http.createServer(function(req, res){ //request is not further processed here

    // function is run when a req causes an event emit
    res.writeHead(200, { 'Content-Type' : 'text/plain' }); // arguments are status, headers
    res.end('Hello world\n'); // specifying body
    
    // Specifying the port & address to map the server object to
}).listen(1337, '127.0.0.1');
