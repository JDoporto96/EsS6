// Create an instance method for Date objects that gives you the next day. (1 hour).

Date.prototype.nextDay = function(){
    return new Date(this.getTime()+ 86400000)
}

const today = new Date()
console.log(today);
const tomorrow = today.nextDay();
console.log(tomorrow);



