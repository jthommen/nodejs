// Module pattern: Replacing exports with a custom object
function Greetr() {
    this.greeting = 'Replacing module.exports with custom object';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr();