// Implement the following functionality for a duplicate() method: (30 mins)

// [1,2,3,4].duplicate(); // output: [1,2,3,4,1,2,3,4]

// function duplicate(arr){
//     let newArr = arr.concat(arr);
//     return newArr;
// }

Array.prototype.duplicate=function(){
    return this.concat(this)
    
}

const arr= [1,2,3,4];
console.log(arr.duplicate())



