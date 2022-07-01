// Create a global function which modifies the DateTime[sic] object. (1 hour)

let bday = new Date('September 24,1996 19:20:00 GMT-0500');
console.log(bday)

function addTime(date,months,days,milisecs){
    return new Date(date.getTime()+(months * 2628000000)+(days * 86400000)+ milisecs)
}

console.log (addTime(bday,1,0,0))

