// Explain the output of the following code: (30 mins)

function myLog() {
   return {
      bar: 'bar',
      foo: 'foo',
      prop: function () {
          var self = this;
          console.log(self.bar);
          console.log(this.foo);
          (function() {
             console.log(self.bar);
             console.log(this.foo);
          })();
      }
   };
}

var obj = myLog();
obj.prop();


//The previous function returns an object with 3 properties, bar, foo and prop. The first two keys have a string
//as their value. Prop has a function, which makes it a method. This method sets self as the object scope. This
//way self can get access to the object's properties foo and bar (first 2 console.log). Then an IIFE is executed.
// as self set this to the objects scope, self.bar can access the object's properties(3rd console.log).
// But when this is called inside the IIFE it is set on the function's lexical scope and as it doen't have a property/
// variable foo, it should return undefined 




