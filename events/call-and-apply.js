var obj = {
    name: 'John',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();

// Overwrite of 'this' is possible with .call
obj.greet.call({name: 'Jane Doe'});

// Different param handling with .apply: Single Array, vs .call: Comma separated list
obj.greet.call({name: 'Jane Doe'}, [param, param2]);