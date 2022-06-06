// Write a function that will produce the correct output given the input without hardcoding it. (1 hours)

// Input: "January February March January February March"
// Output: "January February March April January February March April"

const months =["January", "February", "March", "April", "May", "June", "July", 
                "August", "September", "October","November","December"];

function monthStr(input){
    const arr = input.split(" ");
    let i = 0;
    let str="";
    while (i< arr.length){
        arr.pop();
        i++;
    };
    arr.push(months[arr.length]);
    for(let mon of arr.concat(arr)){
        str+= mon +" "
    };

   return str
    
}

console.log(monthStr("January February March January February March"));


