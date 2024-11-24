const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");

const maxTemperature = document.querySelector("#maxTemperature");
const minTemperature = document.querySelector("#minTemperature");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-17.42&lon=-66.17&appid=e7735ca7ff6b34ba2d5b96688c48601c&units=metric';
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=-17.42&lon=-66.17&appid=e7735ca7ff6b34ba2d5b96688c48601c&units=metric';

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

async function apiFetch2(){
    try {
        const response = await fetch(url2);
        if(response.ok){
            const data = await response.json();
            displayData2(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayData(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Icon of the Actual Weather');
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

function displayData2(data){

    const convertToDayOfWeek = (dt) => { 
        const date = new Date(dt * 1000); 
        const options = {weekday: 'long'}; 
        return date.toLocaleDateString('en-US', options); 
    };

    // weatherForecastContainer.innerHTML = '';
    while (weatherForecastContainer.children.length > 1) { 
        weatherForecastContainer.removeChild(weatherForecastContainer.lastChild); 
    }

    const days = [
        data.list[0], 
        data.list[8], 
        data.list[16]]; 
    days.forEach((day, index) => { 
        const dayElement = document.createElement('p'); 
        dayElement.innerHTML = `${convertToDayOfWeek(day.dt)}: ${day.main.temp.toFixed(1)} &deg;C`; 
        weatherForecastContainer.appendChild(dayElement); });
        
}

function convertUnixTime(unixTime) { 
    const date = new Date(unixTime * 1000); 
    const hours = date.getHours().toString().padStart(2, '0'); 
    const minutes = date.getMinutes().toString().padStart(2, '0'); 
    return `${hours}:${minutes}`; 
}

apiFetch();
apiFetch2();