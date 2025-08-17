const cityForm = document.getElementById("cityForm");
const cityInput = document.getElementById("cityInput");
const unitCheckbox = document.getElementById("unitCheckbox");

const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const condition = document.getElementById("condition");

let isCelsius = true;


const weatherBackgrounds = {
    sunny: "images/sunny.jpg",
    cloudy: "images/cloudy.jpg",
    rainy: "images/rainy.jpg",
    snowy: "images/snowy.jpg"
};

async function getCoords(city) {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
    const data = await res.json();
    if (!data.results) throw new Error("City not found");
    return data.results[0];
}

async function getWeather(lat, lon) {
    const unit = isCelsius ? "celsius" : "fahrenheit";
    const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=${unit}`
    );
    return await res.json();
}

function displayWeather(city, weather) {
    cityName.textContent = city;
    temperature.textContent = `Temperature: ${weather.current_weather.temperature}° ${isCelsius ? "C" : "F"}`;
    humidity.textContent = `Wind Speed: ${weather.current_weather.windspeed} km/h`;
    condition.textContent = `Condition Code: ${weather.current_weather.weathercode}`;

    
    if (weather.current_weather.temperature > 25) {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // Sunny
        document.body.style.backgroundImage = `url(${weatherBackgrounds.sunny})`;
    } else if (weather.current_weather.temperature > 15) {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png"; // Cloudy
        document.body.style.backgroundImage = `url(${weatherBackgrounds.cloudy})`;
    } else if (weather.current_weather.temperature > 5) {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163657.png"; // Rainy
        document.body.style.backgroundImage = `url(${weatherBackgrounds.rainy})`;
    } else {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/642/642102.png"; // Snowy
        document.body.style.backgroundImage = `url(${weatherBackgrounds.snowy})`;
    }
}


cityForm.addEventListener("submit", async e => {
    e.preventDefault();
    try {
        const city = cityInput.value.trim();
        if (!city) return alert("Enter a city name");
        const coords = await getCoords(city);
        const weather = await getWeather(coords.latitude, coords.longitude);
        displayWeather(coords.name, weather);
    } catch (err) {
        alert(err.message);
    }
});


unitCheckbox.addEventListener("change", async () => {
    isCelsius = !isCelsius;
    if (cityName.textContent) {
        const coords = await getCoords(cityName.textContent);
        const weather = await getWeather(coords.latitude, coords.longitude);
        displayWeather(coords.name, weather);
    }
});


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        async pos => {
            const { latitude, longitude } = pos.coords;
            const weather = await getWeather(latitude, longitude);
            displayWeather(`Your Location`, weather);
        },
        () => {
            alert("Location denied, please search manually.");
        }
    );
}
