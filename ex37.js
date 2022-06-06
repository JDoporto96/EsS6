// While using as much ES6 syntax as  possible, write functions that will do the following:  (1 hours)

// "hello".exclamation() == "hello!";
// "hello world".exclamation() == "hello world!"


// add(2, 5) == 7
// add(7, 11) == 18
// add(12, 8, 5, 6) == 31

String.prototype.exclamation= function(){
    return this + "!";
}
const test1 = ("hello".exclamation() == "hello!");
console.log(test1);

const test2 ="hello world".exclamation() == "hello world!"
console.log(test1);

function add(...args){
    return args.reduce((a,b)=>a+b);
}

console.log(add(2,5));
console.log(add(7,11));
console.log(add(12,8,5,6));


