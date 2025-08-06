// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
    // console.log(evt);
    // console.log(evt.type);
    // console.log(evt.target);
    // console.log(evt.clientX, evt.clientY);
    
// }
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", (evt) => {
//     console.log("btn is clicked 0");
    
// });

// btn1.addEventListener("click", () => {
//     console.log("btn is clicked 1");
    
// });
// btn1.addEventListener("click", () => {
//     console.log("btn is clicked 2");
    
// });

// const handler3 =  () => {
//     console.log("btn is clicked 3");

// };
// btn1.addEventListener("click", handler3);

// btn1.removeEventListener("click", handler3);




// let box = document.querySelector("div");
// box.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }


let mode = document.querySelector("#btn1");
let curMode = "light";


mode.addEventListener("click", () => {
    if (curMode === "light" ){
        curMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        curMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(curMode);
});










