// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.weather-description');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');
const overmorrow = document.querySelector('#overmorrow');

// Constants
const key = "9c0749aa98c27bef8d58367d8bf97ace";
const lat = "6.600812671778594972457511";
const long = "3.3525391091815706";

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`;

// Utility
function formatTime(unix, offset) {
    const localTime = new Date((unix + offset) * 1000);
    let hours = localTime.getHours();
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
}

function getWeekdayFromUnix(unix, offset) {
    const date = new Date((unix + offset) * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

// Fetch and display current weather
async function fetchCurrentWeather() {
    try {
        const response = await fetch(weatherURL);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        displayCurrent(data);
    } catch (error) {
        console.error(error);
    }
}

// Fetch and display forecast
async function fetchForecast() {
    try {
        const response = await fetch(forecastURL);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        // console.log(data);
        displayForecast(data);
    } catch (error) {
        console.error(error);
    }
}

// Current weather
function displayCurrent(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;
    highTemp.innerHTML = `${data.main.temp_max.toFixed(1)}&deg;C`;
    lowTemp.innerHTML = `${data.main.temp_min.toFixed(1)}&deg;C`;
    humidity.innerHTML = `${data.main.humidity}%`;
    sunrise.innerHTML = formatTime(data.sys.sunrise, data.timezone);
    sunset.innerHTML = formatTime(data.sys.sunset, data.timezone);

    const iconURL = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconURL);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.hidden = false;
    captionDesc.textContent = desc;
}

// Forecast
function displayForecast(data) {
    const offset = data.city.timezone;
    const forecastList = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    today.innerHTML = `Today: ${forecastList[0].main.temp.toFixed(1)}&deg;C`;
    tomorrow.innerHTML = `${getWeekdayFromUnix(forecastList[1].dt, offset)}: ${forecastList[1].main.temp.toFixed(1)}&deg;C`;
    overmorrow.innerHTML = `${getWeekdayFromUnix(forecastList[2].dt, offset)}: ${forecastList[2].main.temp.toFixed(1)}&deg;C`;
}

// Run both
fetchCurrentWeather();
fetchForecast();