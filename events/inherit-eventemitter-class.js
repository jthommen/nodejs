// Inheritance from EventEmitter (NodeJS Core Module) via ES6 classes

'use strict';

// Core/native module imports
var EventEmitter = require('events');

class Greetr extends EventEmitter{
    constructor() {

        // Make sure EvenEmitter can add to created object: SuperConstructor pattern
        super();
        this.greeting = 'Hello world!';
    }

     greet(data){
         console.log(`${ this.greeting }: ${data}`);
         this.emit('greet', data);
     }
}

// Object is instantiated
var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log('Someone greeted!: ' + data);
});

// Calling greet function from greeter object greeter1
greeter1.greet('Juri');