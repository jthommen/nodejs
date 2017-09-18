// Module Pattern: Revealing Module Pattern
// Isolated module logic with scoped exposure in module exports
var greeting = 'Revealing Module Pattern'; // protected

function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet
}