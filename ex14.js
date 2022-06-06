// Create a simple function to tell whether 2 is passed as a parameter or not. (30 mins).

function is2Passed(param = false){
    if(param == 2){
        return "2 has been pased"
    }
    else{
        return " not 2"
    }
}

console.log(is2Passed());
console.log(is2Passed(2));
console.log(is2Passed("34"));

