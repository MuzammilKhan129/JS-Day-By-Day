// import { capitalString } from "./string_func.js";


// const a;    //constiable with assignment operator
// const b;

// a=7;
// b=a;


// console.log(a);
// console.log(b);
// a++;

// b--;
// console.log(a);
// console.log(b);

// const rem;
// rem = 11 % 3;
// console.log(rem);
// const string = "I am a \"double quoted\" string inside the \"double quotes\"";
// console.log(string);

// const string = 'I am a "double quoted" string inside the "double quotes"';
// console.log(string);

// const string = "I am a \ndouble quoted\t string\r inside\f the double quotes\"";
// console.log(string);


// const str = "i come first. " + "i come last."
// console.log(str)
// //or
// const str = "i come first. "
// str += "i come last."
// console.log(str);
// const myName = "moni";
// const str = "my name is "+ myName +", i am a footballer."
// console.log(str);


// const str1 = "umbrella";
// const strlen = str1.length;
// console.log(strlen)


// const str2 = "umbrella";
// const strfs = str2[0];
// console.log(strfs);

// const str3 = "umbrella";
// const strls = str3[str3.length-1];
// console.log(strls);

// const myArray = ["onion","pyaaz",34];
// ourArray = myArray[0];
// console.log(ourArray);


// const nstArray = [["onion","pyaaz",34],["onion","pyaaz",34]];
// pnArray = nstArray[0]; 
// console.log(pnArray);
// klArray = nstArray[0][1]; 
// console.log(klArray);

// const nstArray = [["onion","pyaaz",34],["onion","pyaaz",34]];
// nstArray[0][1] = "vassal"; 
// console.log(nstArray[0][1]);


// const nstArray = [["onion","pyaaz",34],["onion","pyaaz",34]];
// nstArray.push("vassal"); 
// console.log(nstArray[2]);


// const psArray = [23 ,34 ,45];
// psArray.push([23,34]);
// console.log(psArray);



// const nstArray = [["onion","pyaaz",34],["onion","pyaaz",34]];
// nstArray[0].push("vassal"); 
// console.log(nstArray[0][3]);



// let nstArray = [["onion","pyaaz",4],["onion","pyaaz",3],34];
// let itemRemove = 0;
// const index = nstArray.indexOf(itemRemove);
// if (index !== -1 ){
//     nstArray.splice(index, 1)

// }
// console.log(nstArray);

// let nstArray = [["onion","pyaaz",4],["onion","pyaaz",3],34];
// let popArray =nstArray.pop();
// console.log(popArray);
// let stArray = nstArray.shift();
// console.log(stArray);

// let nstArray = [["onion"],["pyaaz"],34];
// nstArray.unshift("Happy");
// console.log(nstArray);


// function resueAble(){
//     console.log("hi World");
// }

// resueAble();

// function subsTract(a,b){
//     console.log(a-b);
// }

// subsTract(152532345256,3245245243);


// let olGlobal = 10;

// function fun2(){
//     const opGlobal =" nfjkJK";
// }




// function fun1(){
//     let output = " ";
//     if(olGlobal != "undefined"){
//         output += "olGlobal: " + olGlobal ;
//     }
//     if(opGlobal != "undefined"){
//         output += " opGlobal: " + opGlobal ;
//     }
//     console.log(output);
// }

// fun1();



// let varGlobal = 10;

// function scopeChcck(){
//     let varGlobal = 100;
//     console.log(varGlobal);
// }

// scopeChcck();


// function subsTract(num){
//     return num - 7;
// } 


// console.log(subsTract(10));


// let sum = 0;
// function addThre(){
//     sum += 3;
//     return sum;
// }

// console.log(addThre());



// let proCess = 0;

// function funcBody(num){
//     return (num + 5) / 3 ;
// }

// proCess = funcBody(10);

// console.log(proCess);


// function numItem(arr, item){
//     arr.push(item);
//     return arr.shift();
// }

// let numArray = [23,34,45,56]

// console.log("Before: " + JSON.stringify(numArray));
// console.log(numItem(numArray, 67))
// console.log("After: " + JSON.stringify(numArray));



// function booLean(wasItTrue) {
//     if (wasItTrue){
//         return "yes, it's True"
//     }
//     else{
//         return "no, it's Flase"
//     }
// }


// console.log(booLean(false));

// function equals(val) {
//     if (val === 7){
//         return "yes, it's True"
//     }
//     else{
//         return "no, it's Flase"
//     }
// }


// console.log(equals(7));

// function comaPare(a, b) {
//     if (a == b){
//         return "yes, it's True"
//     }
//     else{
//         return "no, it's Flase"
//     }
// }


// console.log(comaPare(10, "10"));


// function equals(val) {
//     if (val != 17){
//         return "not equal"
//     }
//     else{
//         return "equal"
//     }
// }


// console.log(equals(7));


// function equals(val) {
//     if (val !== 17){
//         return "not equal"
//     }
//     else{
//         return "equal"
//     }
// }


// console.log(equals("17"));


// function equals(val) {
//     if (val > 17){
//         return "greater than 10"
//     }
//     if (val < 10){
//         return "10 or less"
//     }
// }


// console.log(equals(7));


// function equals(val) {
//     if (val >= 11){
//         return "greater than 10"
//     }
//     if (val <= 10){
//         return "10 or less"
//     }
// }


// console.log(equals(17));


// function equals(val) {
//     if (val >= 11 && val <=25){
//         return "That's Eligible"
//     }
//     if (val <= 10){
//         return "Elighible"
//     }
// }


// console.log(equals(17));



// function equals(val) {
//     if (val < 11 || val >25){
//         return "That's Eligible"
//     }
//     return "not Eligible"
    
// }


// console.log(equals(17));



// function equals(val) {
//     if (val < 11 || val >25){
//         return "That's Eligible"
//     }
//     else{
//         return "not Eligible"
//     }
// }
// console.log(equals(17));



// function equals(val) {
//     if (val < 11 || val >25){
//         return "That's Eligible"
//     }
//     else if(val > 11 && val < 25){
//         return "not Eligible"
//     }
//     else{
//         "Please Give Val a Value";
//     }
// }
// console.log(equals(1234));


// function switchState(val){
//     let ans = "";
//     switch(val){
//     case "a":
//         ans = "alpha";
//         break;
//     case "b":
//         ans = "beta";
//         break;
//     case "c":
//         ans = "gamma";
//         break;
//     }
//     return ans;
// }

// console.log(switchState(1));



// function switchState(val){
//     let ans = "";
//     switch(val){
//     case "a":
//         ans = "alpha";
//         break;
//     case "b":
//         ans = "beta";
//         break;
//     case "c":
//         ans = "gamma";
//         break;
//     default:
//         ans = "Please Give A String";
//         break;
//     }
//     return ans;

// }

// console.log(switchState("a"));

// function switchState(val){
//     let ans = "";
//     switch(val){
//     case 1:
//     case 2:
//     case 3:
//         ans = "low";
//         break;
//     case 4:
//     case 5:
//     case 6:
//         ans = "mid";
//         break;
//     case 7:
//     case 8:
//     case 9:
//         ans = "high";
//         break;
//     }
//     return ans;
// }

// console.log(switchState(8));


// function isBool(a, b){
//     return a < b;
// }

// console.log(isBool(120,15));


// let myDog = {
//     "dog name" : "Quincy",
//     "legs" : 4,
//     "tails" : 1,
// }


// let accEss = myDog.tails;

// console.log(accEss);


// let myDog = {
//     "dog name" : "Quincy",
//     "legs" : 4,
//     "tails" : 1,
// }

// let accEss = myDog["dog name"];

// console.log(accEss);


// let myDog = {
//     "dog name" : "Quincy",
//     "legs" : 4,
//     1 : "tails",
// }

// let number = 1;
// let accEss = myDog[number];

// console.log(accEss);


// let myDog = {
//     "dog name" : "Quincy",
//     "legs" : 4,
//     1 : "tails",
// }

// myDog.legs = "lats";
// myDog.bark = "bow-wow";
// myDog[2]="stopy";
// delete myDog["dog name"];
// delete myDog[1];
// console.log(myDog);


// const myDog = {
//     "dog name" : "Quincy",
//     "legs" : 4,
//     1 : "tails",
// }

// function checkOb(checkProp){
//     if(myDog.hasOwnProperty(checkProp)){
//         return myDog[checkProp];
//     }
//     else{
//         return "Not Found";
//     }
// }


// console.log(checkOb("hello"));


// let myArr = [];

// let i = 0;

// while (i < 5){
//     myArr.push(i);
//     i++;
// }

// console.log(myArr);

// let myArr =[];

// for(let i=0;i<5;i++){
//     myArr.push(i);
// }


// console.log(myArr);

 

// let myArr =[];

// for(let i = 1; i < 20; i+=2){
//     myArr.push(i);
// }


// console.log(myArr);

// let myArr =[];

// for(let i = 10; i > 0; i-=2){
//     myArr.push(i);
// }


// console.log(myArr);

// let myArr =[2,3,4,5,6,7,8];

// let ourArray = 0;

// for(i = 0; i < myArr.length; i++){
//     ourArray += myArr[i];
// }

// console.log(ourArray);


// function mulTiple(arr){
//     let product = 1; //1*2*3*4*

//     for(let i = 0;i < arr.length;i++){    //i=3
//         for(j = 0; j < arr[i].length;j++){      //j=2
//             product *= arr[i][j];
//         }
    
//     }
//     return product;
// }

// let multiArr = [[1,2],[3,4],[5,6,7]]
// console.log(mulTiple(multiArr));

// let myArr = [];

// let i = 10;

// do{
//     myArr.push(i);
//     i++;
// }while (i < 5)

// console.log(i, myArr);

// function ranDom(myMin,myMax){
//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

// console.log(ranDom(5,15));

// function convertIntoStr(str){
//     return parseInt(str);
// }

// console.log(convertIntoStr("45"));



// function convertIntoStr(str){
//     return parseInt(str, 2);
// }

// console.log(convertIntoStr("1011000100001001001"));

// function checkSign(num){
//     return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
// }


// console.log(checkSign(354));

// function useStrict(){
//     "use strict";

//     const mathConstants ={
//        Pi : 3.14,
//     }
//     Object.freeze(mathConstants);
//     try{
//         mathConstants.Pi = 99;
//     }
//     catch( ex ){
//         console.log(ex);
//     }
//     return mathConstants.Pi;
// }

// console.log(useStrict());


// const magic = (arr1, arr2) => arr1.concat(arr2);
// console.log(magic([1,3],[2,4,5]));

// const magic =[4,4,-9,-3,2,-7,1];


// const faun = arr => {
//     const squredIntegar =arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
//     return squredIntegar;
// }


// const squredIntegar = faun(magic);
// console.log(squredIntegar);


// const increment = function() {
//     return function increment(num, value=1){
//         return num + value;
//     }
// }();

// console.log(increment(2,4));
// console.log(increment(2));

// const sum = function(){
//     return function sum(...args){            //... rest operator
//         return args.reduce((a,b) => a+b ,0);
//     }
// }();

// console.log(sum(1,2,3,4,5,6,7));

// const arr1 =['JAN','FEB','MAR','APR']
// let arr2;
// (function(){
//     arr2= [...arr1];        //spread operator ...
//     arr1[0] = 'Potato';
// })();
// console.log(arr2);
// console.log(arr1);

// const avgTemp ={
//     today : 99,
//     tomarrow : 99,
// }

// function getTemp(avgTemp){
//     const {tomarrow : tempOfTmrw} = avgTemp;     //destructuring
//     return tempOfTmrw;
// }

// console.log(getTemp(avgTemp));

// const source = [1,2,3,4,5,6,7,8,9,10]

// function removeTwoItem(list){
//     const [ , , ...arr] = list;     //destructuring with rest operator
//     return arr;
// }

// const arr =removeTwoItem(source);
// console.log(arr);
// console.log(source);


// const stats ={
//     max : 24,
//     min : 25,
//     standard : 46.56,
//     deviation : 34,
// }

// function half({ max, min }){
//     return (max + min) / 2;
// }

// console.log(half(stats));

// function createPerson(name, age, gender){
//     return{
//         name : name,
//         age : age,
//         gender : gender,
//     }
// }
// uper 6 line in one line if you know the key and value.

// createPerson = (name, age, gender) => ({name, age, gender});

// console.log(createPerson("Moni", 23, "Male"));

// class spaceShuttle {
//     constructor(targetPlanet){
//         this.targetPlanet = targetPlanet;
//     }
// }
// const zeus = new spaceShuttle("Mars");
// console.log(zeus.targetPlanet);

// function makeClass(){
//     class thermostat {
//         constructor(temp){
//             this._temp = 5/9 *(temp -32);
//         }
//         get temprature(){
//             return this._temp;
//         }
//         set temprature(updatedtemp){
//             this._temp = updatedtemp;
//         }
//     }
//     return thermostat;
// }

// const thermostat = makeClass();
// const thermos = new thermostat(766);
// let temp = thermos.temprature;
// thermos.temprature=265;
// temp = thermos.temprature;
// console.log(temp);



// const cap = capitalString("hsgdykuwufgy");
// console.log(cap);











