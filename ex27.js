// Explain the result of the following operations (1 hours)
// []+[] concatenates both arrays into a string with all the elements (and commas) of both arrays.
// {}+[] returns a string [object Object] concatenated with the elements of the array []
// []+{} returns the elements of array as a string concatenated with the string [object Object]
// {}+{} returns two strings[object Object ] concatenated


const a ={}, b = {};
let c = b+a;
console.log(typeof c);
