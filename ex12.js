// Create a global function which modifies the DateTime[sic] object. (1 hour)

var fn = new Function('return new Date(new Date().getTime()+ 2628000000)')
console.log(new Date())
console.log(fn())
