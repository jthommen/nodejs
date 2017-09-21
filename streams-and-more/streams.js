// Streams

// streams are event emitters
// old stream code and new stream codes (many) available:
// readable, writable, duplex, transform, passthrough

// Stream is an abstract base class

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16*1024 }); // encoding produces text instead of buffers, try with 32kb chunks

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt', {encoding: 'utf8', highWaterMark: 8*1024});

// Listening to the 'data' event starts streaming processes for write
readable.on('data', function(chunk) {
    console.log(chunk.length); // shows buffer junk size
    writable.write(chunk); // write received junks to the specified file
});
