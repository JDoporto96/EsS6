// Create a function that will remove specific elements from an array.  (1 hours)

function deleteElement(arr,element){
    const index = arr.indexOf(element);
    if(index !== -1){
        arr.splice(index,1);
    }
    
}

const array =[1,2,3,"hello", "world",true];
console.log(array);

deleteElement(array,"hello");
deleteElement(array,true);

console.log(array);