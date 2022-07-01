// Given the following code snippet of a module, create two public methods and 1 private method (30 mins).

// var foo = (function () { /* … */ })();
// foo.bar();
// foo.test();


var foo = (function () {
    var publicMethods={};

    var sayHello = function(){
        console.log('Hello. ')
    };

    publicMethods.bar = function(){
        sayHello()
    };

    publicMethods.test = function(){
        sayHello()
    }

    return publicMethods;

})();



foo.bar();
foo.test();
//foo.sayHello();


