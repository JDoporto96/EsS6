// Create a JS function that flattens an array: 

function flat(array){
    let flatArray=[].concat(...array);
    if(flatArray.some((element) => Array.isArray(element))){
        return flat(flatArray);
    }
    else{
        return flatArray;
    }   
}

const arr = [1,2,3,[4,5,[6,[7,8]], 9,10]];
console.log(flat(arr));