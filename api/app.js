const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getData = async () => {
    console.log("getting data...");
    let promise =await fetch(URL);
    console.log(promise);
    let data = await promise.json();
    factPara.innerText = data.fact;
    console.log(data.fact);
}

btn.addEventListener("click", getData);



