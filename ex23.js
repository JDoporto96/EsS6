// Write a function that will generate random integer numbers within a given range (min - max).
// The number should not repeat an already generated number. Do not store previously computed values

const{getA,getC}=require('./ex23_utils.js')

function* getRandom(seed, min, max){
    if(!seed){
        seed = Date.now();
    }

    var modulus = (max+1 - min);
    var multiplier =getA(modulus);
    var increment =getC(modulus);

    for(let i=0; i<= (max-min);i++){
        seed = (seed * multiplier + increment) % modulus;
        yield Math.floor((seed/modulus)*(max-min+1)+min);
    }
   
}

const max = 30, min = 15;
let arr= [];

var random = getRandom(0,min,max);
for(let i=min;i<=max;i++){
    arr.push(random.next().value)
}

console.log(arr)

