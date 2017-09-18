// JS First-Class Functions

// function statement
function greet() {
    console.log('Hi');
}

// function call
greet();

// functions are first-class (objects)
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hi J');
}
greetMe();

// still first class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
    console.log('Hi Juri');
});