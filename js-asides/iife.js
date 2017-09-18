// IIFE - Immediately invoked function expression

// Basic function
basic = function() { 
};

// Function Expression with (function) that is called/invoked immediately ()
(function (lastname) {

    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);

}('Doe'));

var firstname = 'Jane';
console.log(firstname);

// Variables created in a function is within function scope only
