// Given an array with positive and negative numbers, write a function that will find 
// all combinations of 3 numbers in that array which sum will total zero.  (4 hours)

function isSumZero(arr){
    var found = false;
    let str ="";
    for (let i = 0; i < arr.length - 1; i++){
        const s = new Set();
        for (let j = i + 1; j < arr.length; j++){
            let x = -(arr[i] + arr[j]);
            if (s.has(x))
            {
                str+=(`(${x}, ${arr[i]}, ${arr[j]}), ` );
                found = true;
            }
            else
                s.add(arr[j]);
                console.log(s);
        }
    }
    if (found == false)
        return( " No set Found" );
    
    return str;
}

const arr =[3,2,1,0,-3,2,2,-2];
console.log(isSumZero(arr));


