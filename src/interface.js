import { searchCity } from './app';
import { format } from 'date-fns';

const inputCity = document.querySelector('#input-city');
const searchBtn = document.querySelector('#search');
const dataContainer = document.querySelector('.data-container');
const loadingContainer = document.querySelector('.loading-container');
const pendingCity = document.querySelector('#pending-city');
const historyList = document.querySelector('#search-history > ul');

const temperature = document.querySelector('#temperature');
const city = document.querySelector('#city');
const weatherIcon = document.querySelector('#weather-icon');
const time = document.querySelector('#time');
const day = document.querySelector('#day');
const date = document.querySelector('#date');
const condition = document.querySelector('#condition');

function startLoading() {
    dataContainer.style.display = 'none';
    loadingContainer.style.display = 'block';
    pendingCity.textContent = inputCity.value;
}

function endLoading() {
    dataContainer.style.display = 'block';
    loadingContainer.style.display = 'none';
}

function updateHistoryInterface(history) {
    historyList.innerHTML = '';

    history.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        historyList.appendChild(li);
    });
}

let temp = 'celsius';
let dataCurrent;
let dataLocation;

function setTemperature() {
    // set changeTemp function
}

function displayTemperature() {
    if (temp === 'celsius') {
        temperature.textContent = dataCurrent.temp_c + '°';
    }
}

function displayLocation() {
    city.textContent = dataLocation.name;
}

function displayWeatherIcon() {
    weatherIcon.setAttribute('src', dataCurrent.condition.icon);
}

function displayDate() {
    const [dateData, timeData] = dataLocation.localtime.split(' ');
    const localDate = new Date(dateData);
    const dayName = format(localDate, 'EEEE');
    const formattedDate = format(localDate, 'dd MMM') + ' \'' + format(localDate, 'yy');

    time.textContent = timeData + ' - ';
    day.textContent = dayName + ',';
    date.textContent = formattedDate;
}

function displayCondition() {
    condition.textContent = dataCurrent.condition.text;
}

function displayData(weatherData) {
    ({current:dataCurrent, location:dataLocation} = weatherData);

    displayTemperature();
    displayLocation();
    displayWeatherIcon();
    displayDate();
    displayCondition();
}

const eventHandlers = (() => {

    searchBtn.addEventListener('click', () => {
        searchCity(inputCity.value);
    });
    
})();

export { 
    eventHandlers, 
    startLoading,
    endLoading,
    updateHistoryInterface,
    displayData
}