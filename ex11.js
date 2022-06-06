// Create a function that will return the properties that are different between 2 objects. 
//        (1 hour).

const obj1={
    name: "Jose",
    age: 25,
    city: "Veracruz"
}

const obj2={
    name: "Ana",
    age: 25,
    city: "Puebla"
}

function objCompare(obj1,obj2){
    const difProps=[];
    for(let prop of Object.keys(obj1)){
        if(prop in obj2 && obj1[prop]!=obj2[prop]){
            difProps.push(prop);
        }
    }
    return `These properties (${ difProps}) are diferent between the objects`; 
}

console.log(objCompare(obj1,obj2));

