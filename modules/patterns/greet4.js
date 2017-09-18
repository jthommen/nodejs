// Module pattern: Replacing exports with a custom object
// Setting moule.exports to function constructor causes a new object to be created for every require call
function Greetr() {
    this.greeting = 'Replacing module.exports with custom object AND cirucumventing cache';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Greetr;