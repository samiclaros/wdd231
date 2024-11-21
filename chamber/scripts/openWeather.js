const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");
const maxTemperature = document.querySelector("#maxTemperature");
const minTemperature = document.querySelector("#minTemperature");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-17.42&lon=-66.17&appid=e7735ca7ff6b34ba2d5b96688c48601c&units=metric';

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error)
    }
}

apiFetch(url);

function displayData(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('class', 'iconWeather');
    weatherIcon.setAttribute('width', 100);
    weatherIcon.setAttribute('height', 100);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
    maxTemperature.textContent = `${data.main.temp_max.toFixed(1)}`;
    minTemperature.textContent = `${data.main.temp_min.toFixed(1)}`;
    humidity.textContent = `${data.main.humidity}`;
    sunrise.textContent = `${convertUnixTime(data.sys.sunrise)}`;
    sunset.textContent = `${convertUnixTime(data.sys.sunset)}`;
}

function convertUnixTime(unixTime) { 
    const date = new Date(unixTime * 1000); 
    const hours = date.getHours().toString().padStart(2, '0'); 
    const minutes = date.getMinutes().toString().padStart(2, '0'); 
    return `${hours}:${minutes}`; 
}