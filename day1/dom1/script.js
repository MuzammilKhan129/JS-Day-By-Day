// let heading = document.getElementById("heading");
// console.dir(heading);


// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);



// let parahas = document.getElementsByTagName("p");
// console.dir(parahas);
// console.log(parahas);




// let elements = document.querySelector("p");
// console.dir(elements);
// console.log(elements);

// id is a single element while tag and classes could be multiple.



// let elements = document.querySelector("p");
// console.dir(elements);
// console.log(elements);

//  console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div);


// let heading = document.querySelector("h1");
// console.dir(heading);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText += " From Apna College";

// console.dir(h2.innerText);

let divs = document.querySelectorAll(".box");
// console.log(divs);

// divs[0].innerText = "unique 1 div"; 
// divs[1].innerText = "unique 2 div"; 
// divs[2].innerText = "unique 3 div"; 

// console.log(divs);

let index = 1;
for(div of divs){
    div.innerText= `new unique value is ${index}`;
    index++;
}
console.log(divs);