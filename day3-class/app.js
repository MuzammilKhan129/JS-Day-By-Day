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
    constructor(brand, mileage){
        
            this.brand = brand;
            this.mileage = mileage;
    }
    start(){
        console.log("start");
    }
    stop() {
        console.log("stop");        
    }
    setBrand(brand){
        this.brand = brand;
    }
}


let fortuner = new ToyotaCar("Toyota", 28);

let lexus = new ToyotaCar("Toyota", 67);



class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{

}



let obj = new Child;



class Person{
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("Do Nothing");
    }
}


class Engineer extends Person{
    constructor(branch){
        
        super();
        this.branch = branch;
        
    }
    work(){
        console.log("solve problems, build something");
    }
}

class Doctor extends Person{
    constructor(name){
        super(name);
        
    }
    work(){
        super.eat();
        console.log("Treat Patient");
    }
}

let enjObj = new Engineer("chemical");
let umar = new Doctor("jutt");


let DATA = "Secret Information" 
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ", DATA);
    }
    
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "new data";
    }
}



let student = new User("moni", "uboy29129@gmail.com");

let admin1 = new Admin("admin1", "admin1@gmail.com")





















































