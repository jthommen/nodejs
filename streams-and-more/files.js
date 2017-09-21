// Files and fs

var fs  = require('fs');

// Synchronous
// Loads file content into the buffer and gives string back
var greet  = fs.readFileSync(__dirname + '/greet.txt', 'utf-8');

console.log(greet);

// Asynchronous
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf-8', function(err, data){ //Error first callback
    console.log(data);
});

console.log('Done');