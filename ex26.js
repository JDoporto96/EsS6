// Explain the following code: (30 mins)

function foo1(){
   var fn = function(){
  	console.log(this.foo);
   };
   return { foo:'bar' };
 }
 
function foo2(){ 
   var fn = function(){
       console.log(this.foo); 
   };
   return { foo:'baz' };
}

console.log(foo1());
console.log(foo2());

//Both functions (foo1 and foo2) declare an inner function fn that logs the
//property foo of fn but it is not defined. This has no importance as foo1 and foo2
//never execute that inner function fn. They both return an object with the property
// foo with a certain string value.


