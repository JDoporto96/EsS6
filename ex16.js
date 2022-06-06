// Given the following object definition, add a method called printName() that returns the firstname plus the lastname when invoked. (30 mins).

// var candidate = {
//    name: {
//       firstname: 'John',
//       lastname: 'Galt',
//       phone: '123-456-7890'
//    }
// }

var candidate = {
    name: {
        firstname: 'John',
        lastname: 'Galt',
        phone: '123-456-7890'
    },
    printName : function(){
        return this.name.firstname +" "+  this.name.lastname
    }
}

console.log(candidate.printName())
    
