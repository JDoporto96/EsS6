// Create a function that returns a function that will return the power of X from a specified number. (1 hours)

// function myPowerFn(power){
//     return (n)=>{n**3}
// }
// var n = myPowerFn(3);
// console.log(n(2));

const myPowerFn=(exponent)=> (base)=>Math.pow(base,exponent);

var n = myPowerFn(3);
console.log(n(2));