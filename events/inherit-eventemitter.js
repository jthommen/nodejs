// Inheritance from EventEmitter (NodeJS Core Module)

// Core/native module imports
var EventEmitter = require('events');
var util = require('util');

// Constructor
function Greetr() {
    // Make sure EvenEmitter can add to created object: SuperConstructor pattern
    EventEmitter.call(this);
    this.greeting = 'Hello world!';
}

// Prototype object connects Greetr with EventEmitter
util.inherits(Greetr, EventEmitter); 

// Greetrs own prototype object
Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

// Object is instantiated
var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log('Someone greeted!' + data);
});

// Calling greet function from greeter object greeter1
greeter1.greet('Juri');