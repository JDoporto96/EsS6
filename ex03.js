// Obtain the intersection of two arrays (1 hours)

function intersection(array1, array2){
    let intersection = array1.filter((num)=>array2.includes(num));
    return intersection;

}

console.log(intersection( [2, 3, 5, 3], [3, 4, 3, 5, 3, 6, 8]));