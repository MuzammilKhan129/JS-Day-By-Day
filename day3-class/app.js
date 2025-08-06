const employee = {
    caclTax() {
        console.log("tax is 10%");
    },
};

const ali = {
    salary : 20000,
}
const ali1 = {
    salary : 20000,
}
const ali2 = {
    salary : 20000,
}
const ali3 = {
    salary : 20000,
}
const ali4 = {
    salary : 20000,
}

ali.__proto__ = employee;
ali1.__proto__ = employee;
ali2.__proto__ = employee;
ali3.__proto__ = employee;
ali4.__proto__ = employee;



class ToyotaCar{
    start(){
        console.log("start");
    }
    stop() {
        console.log("stop");        
    }
    setBrand(brand){
        this.brandName = brand;
    }
}


let fortuner = new ToyotaCar;
fortuner.setBrand("Toyota");
let lexus = new ToyotaCar;


























































































