
// Reverse a string in JavaScript (1 hours)
//     Do not use split.reverse.join
//     Create an instance method for all strings that returns the reversed string

//         "hello world".reverse(); // ldrow olleh

//     Create an instance method for all strings that returns the reversed string, but keeps the order of the words:

// 	    "hello world".reverseWords(); // olleh ldrow


String.prototype.reverse= function(){
    let reverseStr="";
    let i = this.length-1;
        while (i >= 0){
        reverseStr+= this[i];
        i--;
    }
    return reverseStr
}

String.prototype.reverseWords= function(){
    let reverseStr="";
    let strArray= this.split(" ");
    for(let word of strArray){
         reverseStr+= word.reverse()+ " "
    
    }
     return reverseStr
}


const str= "hello world";
console.log(str.reverse())
console.log(str.reverseWords());



