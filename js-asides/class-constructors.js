// Class Constructors (ES6 feature)
// Syntactic Sugar

'use strict';

// Keep in mind the prototypal inheritance
// Syntactic Sugar for functions & prototype-chain
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}

// Function constructor with the new keyword
// new keyword creates empty 'this' Object
var john = new Person('John', 'Doe');

john.greet();

var jane = new Person('Jane', 'Doe');

jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);