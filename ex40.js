
// Given an array with positive and negative numbers, write a function that will find 
// all combinations of 3 numbers in that array which sum will total zero.  (4 hours)

function isSumZero(arr){
    var found = false;
    const res = [];
    for (let i = 0; i < arr.length - 1; i++){
        const s = new Set();
        for (let j = i + 1; j < arr.length; j++){
            let x = (arr[i] + arr[j])==0? 0 : -(arr[i] + arr[j]);
            if (s.has(x))
            {
                let temp = [x,arr[i],arr[j]];
                temp = temp.sort();
                if(!res.some(el => JSON.stringify(el)== JSON.stringify(temp))){
                    res.push(temp)
                }
                
                found = true;
            }
            else
                s.add(arr[j]);
                
        }
    }
    if (found == false)
        return null;
    
    return res;
}

// const arr =[3,2,1,0,-3,2,2,-2];
const arr =[3,2,1];
console.log(isSumZero(arr));


