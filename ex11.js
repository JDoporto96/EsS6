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
    city: "Puebla",
    a: 1
}

function objCompare(obj1,obj2){
    const difProps=[];
    let mainObj = Object.keys(obj1).length > Object.keys(obj2) ? obj1 : obj2;
    let secObj = mainObj===obj1? obj2:obj1;
    for(let prop of Object.keys(mainObj)){
        if((prop in secObj && mainObj[prop]!=secObj[prop])||!(prop in secObj)){
            difProps.push(prop);
        }
    }
    return difProps 
}

console.log(objCompare(obj1,obj2));



