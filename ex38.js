//Item class receives all the main info of the product, like price or the reserve status
class Item{
    constructor(price,brand,model,weight,reserved,deliveryStatus=0){
        this.id = Date.now();
        this.price =price;
        this.brand =brand;
        this.model=model;
        this.weight = weight;
        this.reserved = reserved;
        this.deliveryStatus = this.deliveryMethod(deliveryStatus);
    }
    getPrice(){
        console.log (`Regular price: $${this.price}`);
    }
    applyDiscount(discountPercent){
        return this.price - this.price*(discountPercent)/100
    }//This method is used to get the final price when a discount is applied
    getWeight(){
        console.log (`This item weights: ${this.weight}lbs`);
    }
    isReserved(){
        if(this.reserved){
            console.log(`This item is reserved. Delivery status: ${this.deliveryStatus}`);
        }else{
            console.log("Item available")
        }
    }//This method checks if the item is already reserved or if it can be reserved now
    reserveItem(...args){
        if(this.reserved){
            console.log("Item already reserved")
        }else{
            console.log("Reserving item...")
            this.reserved=true;
            this.deliveryStatus=this.deliveryMethod(args);
        }
    }//This is the method to reserve an item, it checks if it is available and if not
    //changes the reserved status to true and call the deliveryMethod function
    deliveryMethod(method){
        if(method==0){
            return null;
        }
        if (method==1){
            return "In-store pick up"
        }if(method==2){
            return "To be shipped"
        }
    }//This method takes an argument and it changes the deliver status based on the argument provided

}

class Fridge extends Item{
    constructor(price, brand,model,weight,reserved,deliveryStatus=0, capacity){
        super(price, brand,model,weight,reserved,deliveryStatus);
        this.id = "001-" + Date.now();
        this.capacity = capacity;
    }
    getCapacity(){
        console.log(`Volume capacity: ${this.capacity}m^3`)
    }
}

class Printer extends Item{
    constructor(price, brand,model,weight,reserved,deliveryStatus=0, cartdrigeType){
        super(price, brand,model,weight,reserved,deliveryStatus);
        this.id="002-"+ Date.now();
        this.cartdrigeType=cartdrigeType;
    }
    cartdridge(){
        console.log(`Cartridges type: ${this.cartdrigeType}`);
    }
}

class Console extends Item{
    constructor(price, brand,model,weight,reserved,deliveryStatus=0,monthlySub=false){
        super(price, brand,model,weight,reserved,deliveryStatus)
        this.id="003-"+Date.now();
        this.monthlySub=monthlySub;
        
    }
    addMonthlySub(months){
        this.monthlySub=true;
        console.log(`You have been suscribed for online benefits for ${months} months`);
    }
}

class Screen extends Item{
    constructor(price, brand,model,weight,reserved,deliveryStatus=0, size, type){
        super(price, brand,model,weight,reserved,deliveryStatus=0);
        this.id="004"+Date.now();
        this.size=size;
        if(type==1) {this.type="plasma"}
        if(type==2) {this.type="LED"}
        
    }
    getSize(){
        console.log(`This is a ${this.size}" ${this.type} Screen`);
    }
}

const f1=new Fridge(300,"LG","A7-xpx",200,false, 0,3);
console.log(f1);
f1.getCapacity();
f1.isReserved();
f1.reserveItem(2);
f1.isReserved();
f1.reserveItem(2);

const tv1=new Screen(200, "Samsung", "JPL-345",25,false,0,50,2);
console.log(tv1);
tv1.getSize();
