const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=e7735ca7ff6b34ba2d5b96688c48601c&units=metric';

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
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', 50);
    weatherIcon.setAttribute('height', 50);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}