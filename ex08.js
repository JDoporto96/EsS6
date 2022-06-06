// Given an array of size N, move all zeroes contained in the array to the end while  preserving the relative order of all other elements. (2 hours)
// Do not use a separate array
// Do not use splice

// Input: [2,0,4,5,0,2,0,0,3]
// Output: [2,4,5,2,3,0,0,0,0]

function moveZeros(arr){
    const n = arr.length;
    let count = 0;
    for(let i = 0; i<n; i++){
        if(arr[i]!=0){
            arr[count++]=arr[i];
        }
    }
    while (count < n){
        arr[count++] = 0;
    }
       
}

const arr =[2,0,4,5,0,2,0,0,3];
moveZeros(arr);
console.log(arr)