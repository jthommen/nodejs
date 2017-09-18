//ES6 Typed Arrays
// New that JS can deal with raw/binary data

var buffer = new ArrayBuffer(8); // 64 zeroes and ones
var view = new Int32Array(buffer); // Way to deal with binary data in the buffer --> can store two 64 bit numbers 

view[0] = 5;
view[1] = 15;
view[2] = 30; // Buffer only holds two positions --> doesn't gets into buffer

console.log(view);