// Object Properties

var obj = {
    name: "Juri"
}

console.log(obj.name);
console.log(obj['name']);
var prop = 'name';

// Variable set to a string used to get a particular property of an object
console.log(obj[prop]);


// Functions and arrays
var arr = [];

arr.push(function(){
    console.log('Hello World 1');
});

arr.push(function(){
    console.log('Hello World 2');
});

arr.push(function(){
    console.log('Hello World 3');
});

arr.forEach(function(item){
    item();
});