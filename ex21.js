// What is the outcome of the following code? (30 mins).

var foo = "hello";  // Declares a new foo variable and initializes it with the string value "hello"
(function () {      // Creates an anonymous function and immediatly executes it
   var bar = "World";  // A new variable bar is declared an initialized with the string value "World", inside the funtion's scope. Bar is not accessible on the global scope.
   alert( foo + bar);  // The function alert is called with the parameter foo+bar which is a concatenation of both string variables declared before. 
})();                  // As the function alert hasnt been declared and error will be thrown

alert( foo + bar); //An error will be thrown, first because alert hasn´t been defined. Another error will be thrown because bar isn´t a variable accessible for the global scope.  

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

if( [] ) console.log("array is true"); // an array is an object so it is true. "array is true" will be logged
if ([] == true) console.log("array == true"); // it's value comparison is not true, in this case nothing will be logged.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


for(let i = 0; i < 5; ++i){
     setTimeout(function(){
          console.log("counter: ", i);
     }, 100);
}

//This code will iterate over i and in each iteration will set a console.log to be executed in .1 seconds, printing asynchronously counter: (the value of i); Max value taken: 4 as 4<5

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var obj = {
   prop: {}
};          // an object, obj, is created with a property, prop, which its value is an empty object.

delete obj.prop; // the property prop is deleted from the object

console.log(obj.prop); //this returns undefined as prop was deleted from the obj

