// const BASEURL = "https://api.exchangerate.host";



const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "PKR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = "1";
        amount.value = "1";
    }

    try {
        const API_KEY = "a6204b998bc8d2fbcd7cc79505021dd2"; 
        const URL = `https://api.exchangerate.host/convert?access_key=${API_KEY}&from=${fromCurr.value}&to=${toCurr.value}&amount=${amtVal}`;

        let response = await fetch(URL);
        let data = await response.json();

        console.log("API URL:", URL);
        console.log("API Response:", data);

        if (!data.result) {
            throw new Error("Invalid currency data from API");
        }

        document.querySelector(".msg").innerText =
            `${amtVal} ${fromCurr.value} = ${data.result.toFixed(2)} ${toCurr.value}`;
    } catch (error) {
        document.querySelector(".msg").innerText = "Error fetching exchange rate.";
        console.error(error);
    }
});
