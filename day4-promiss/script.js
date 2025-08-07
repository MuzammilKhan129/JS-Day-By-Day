// ASYNC

// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(() =>{
//    console.log("Set Timout called now"); 
// }, 4000);

// console.log("four");
// console.log("five");
// console.log("six");

//CALLBACK

// function sum(a,b){
//     console.log(a+b);
// };

// function calculation(a, b, sumCallback) {
//     sumCallback(a, b);
// };


// calculation(1,2,(a,b) => {
//     console.log(a+b);
// });

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     }, 5000);
//     });
// };



// //nested callback or calback hell
// getData(1, () => {
//     getData(2 , () => {
//         getData(3 , () => {
//             getData(4);
//         })
//     })
// });





// let promise = new Promise(function(resolve, reject) {
//   let success = true;

//   if (success) {
//     resolve("It worked!");
//   } else {
//     reject("It failed!");
//   }
// });

// promise.then(function(result) {
//   console.log(result);  // It worked!
// }).catch(function(error) {
//   console.log(error);   // If it failed
// });


const getPromise = () => {
    return new Promise((resolve, reject) => {
    console.log("i am promise");
    resolve("success");
    // reject("some error occured");
    });
};

let promise = getPromise();
promise.then((res)=> {
    console.log("promise fullfilled", res);
});
promise.catch((err)=> {
    console.log("promise Rejected", err);
});



