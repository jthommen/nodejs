var Emitter = require('./emitter');

var emtr = new Emitter();

// Event Type definition via property name on object
// Listener 1
emtr.on('greet', function() {
    console.log('Somewhere, someone said hello!');
});

// Listener 2
emtr.on('greet', function(){
    console.log('A greeting occurred!');
});

// Manual event emission
console.log('Hello!');
emtr.emit('greet');