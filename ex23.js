// Write a function that will generate random integer numbers within a given range (min - max). 
// The number should not repeat an already generated number. Do not store previously computed values

function getRandomInt(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

function* nonRepGen(min,max){
    const numbers = [...Array(max+1-min).keys()].map(x => x + min);
    while(numbers.length > 0){
        yield numbers.splice(getRandomInt(0,numbers.length),1)[0];
    }
        
}


let min = 5, max=10;
    const gen = nonRepGen(min,max);
    getNum = () => {
        let int= gen.next().value
        if(int){return int}
        else{return "All numbers in range have been used"}
    };

for(let i=min;i<=max+2;i++){
    console.log(getNum());
}


 

