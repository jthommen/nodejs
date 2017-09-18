// Function Constructors

function Person(firstname, lastname){

    this.firstname = firstname;
    this.lastname = lastname;

}

// Funtion Prototyping for inheritance
// Prototype for any object created from 'Person'
Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
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