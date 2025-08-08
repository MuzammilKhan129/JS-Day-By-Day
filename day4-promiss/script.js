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


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//     console.log("i am promise");
//     resolve("success");
//     // reject("some error occured");
//     });
// };

// let promise = getPromise();
// promise.then((res)=> {
//     console.log("promise fullfilled", res);
// });
// promise.catch((err)=> {
//     console.log("promise Rejected", err);
// });




// function asynFunc(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            console.log("data1"); 
//            resolve("success");
//         }, 4000);
//     });
// };

// function asynFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            console.log("data2"); 
//            resolve("success");
//         }, 4000);
//     });
// };

// console.log("Fetching data1....");
// asynFunc().then((res) => {
//     console.log("Fetching data2....");
//     asynFunc2().then((res) => {
// });
// });



function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("data", dataId);
        resolve(200);
    }, 2000);
    });
};


// async await
async function run1() {
    try{
        await getData(1);
        await getData(2);
        await getData(3);
        await getData(4);
        await getData(5);
        await getData(6);
    }catch(err){
        console.error(err);
    }
}
//call it through IIFE
(async () => {
    try{
        await getData(1);
        await getData(2);
        await getData(3);
        await getData(4);
        await getData(5);
        await getData(6);
    }catch(err){
        console.error(err);
    }
})();
//pr0mise chain 

// getData(123).then(() => {
//     return getData(232153)
//     })
//     .then(() => {
//     return getData(537)
//     })
//     .then(() => {
//     return getData(4547654)
//     })
//     .then(() => {
//         console.log("success");
//     });

// or this promise chain

// getData(1)
//     .then(() => getData(2))
//     .then(() => getData(3))
//     .then(() => getData(4))
//     .catch(err => console.error(err));


// nested callback or calback hell
// getData(1, () => {
//     getData(2 , () => {
//         getData(3 , () => {
//             getData(4);
//         })
//     })
// });


// async await
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// };

// async function run() {
//     await api();
    
// }
