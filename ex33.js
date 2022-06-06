// Explain the difference, if any, between the following two functions. Will the returned value be the same if compared? (30 mins)

function func1() { return { prop:"foo"}; }
function func2() { return { prop:'foo'}; }

//There is no difference. Both create an object with a property prop with a string "foo" as its value. 
// quotes and double quotes are treated as the same on strings.

//Eventhought both functions are the same, the returned objects are different instances and the comparison will be false

console.log(func1()==func2());

