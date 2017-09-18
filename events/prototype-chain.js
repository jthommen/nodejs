// JS prototyping

// Person prototype
var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

// First instance: John
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

// Second instance: Jane
var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());
