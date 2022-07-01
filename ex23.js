// Write a function that will generate random integer numbers within a given range (min - max).
// The number should not repeat an already generated number. Do not store previously computed values

const{getA,getC}=require('./ex23_utils.js')

function GetRandom(seed, min, max){
    var self = this;
    if(!seed){
        seed = Date.now();
    }

    var modulus = (max+1 - min);
    var multiplier =getA(modulus);
    console.log(multiplier);
    var increment =getC(modulus);
    console.log(increment)
    


    self.nextInt = function(){
        seed = (seed * multiplier + increment) % modulus;
        return Math.floor((seed/modulus)*(max-min+1)+min)
    }
}

const max = 30, min = 15;
let arr= [];

var random = new GetRandom(0,min,max);
for(let i=min;i<=max;i++){
    arr.push(random.nextInt())
}

console.log(arr)

