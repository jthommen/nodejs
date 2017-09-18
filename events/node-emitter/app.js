var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

// Event Type definition via property name on object
// Listener 1
emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello!');
});

// Listener 2
emtr.on(eventConfig.GREET, function(){
    console.log('A greeting occurred!');
});

// Manual event emission
console.log('Hello!');
emtr.emit(eventConfig.GREET);