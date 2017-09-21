// Pipes

// connect streams for e.g. copying data

var fs = require('fs');
var zlib = require('zlib'); // for compressing into gzip

var readable = fs.createReadStream(__dirname + '/greet.txt'); 
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

// Pipe sets up event listener on readable stream and pipes this stream to destination
readable.pipe(writable); // possible to pipe with .pipe()

// Method Chaining
// read file, compress junks, pass them on into compress write stream
readable.pipe(gzip).pipe(compressed);

// Tip:  Streams in node make it performant! Use it!
