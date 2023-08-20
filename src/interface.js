import { searchCity } from './app';
import { format } from 'date-fns';
import { backgrounds } from './backgrounds';

const weatherSidebar = document.querySelector('.weather-sidebar');
const inputCity = document.querySelector('#input-city');
const searchBtn = document.querySelector('#search');
const errorMessage = document.querySelector('#error-message');
const dataContainer = document.querySelector('.data-container');
const loadingContainer = document.querySelector('.loading-container');
const pendingCity = document.querySelector('#pending-city');
const historyList = document.querySelector('#search-history > ul');
const searchedLcn = historyList.querySelectorAll('li');

const menu = document.querySelector('#menu');
const menuModal = document.querySelector('.menu-modal');

const backgroundImg = document.querySelector('.background > img');
const dataMain = document.querySelector('.data-main');
const temperature = dataMain.querySelector('#temperature');
const city = dataMain.querySelector('#city');
const weatherIcon = dataMain.querySelector('#weather-icon');
const time = dataMain.querySelector('#time');
const day = dataMain.querySelector('#day');
const date = dataMain.querySelector('#date');
const condition = dataMain.querySelector('#condition');

const dataCondition = document.querySelector('#data-condition');
const cloudPercentage = document.querySelector('#cloud-percentage');
const humidityPercentage = document.querySelector('#humidity-percentage');
const windSpeed = document.querySelector('#wind-speed');
const feelsLike = document.querySelector('#feels-like');
const country = document.querySelector('#country');
const region = document.querySelector('#region');
const latitude = document.querySelector('#lat');
const longitude = document.querySelector('#lon');

function startLoading() {
    dataContainer.style.display = 'none';
    loadingContainer.style.display = 'block';
    pendingCity.textContent = inputCity.value;

    searchBtn.classList.add('inactive');
}

function endLoading() {
    dataContainer.style.display = 'block';
    loadingContainer.style.display = 'none';

    searchBtn.classList.remove('inactive');
}

function updateHistoryInterface(history) {
    historyList.innerHTML = '';

    history.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        historyList.appendChild(li);

        li.addEventListener('click', () => {
            if (searchBtn.classList.contains('inactive')) return;
            searchCity(city);
        });
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
        feelsLike.textContent = dataCurrent.feelslike_c + '°';
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
    dataCondition.textContent = dataCurrent.condition.text;
}

function displaySidebarData() {
    cloudPercentage.textContent = dataCurrent.cloud + '%';
    humidityPercentage.textContent = dataCurrent.humidity + '%';
    windSpeed.textContent = dataCurrent.wind_kph + 'km/h';

    country.textContent = dataLocation.country;
    region.textContent = dataLocation.region;
    latitude.textContent = dataLocation.lat;
    longitude.textContent = dataLocation.lon;
}

function displayData(weatherData) {
    ({current:dataCurrent, location:dataLocation} = weatherData);

    displayTemperature();
    displayLocation();
    displayWeatherIcon();
    displayDate();
    displayCondition();

    displaySidebarData();
    console.log(weatherData);
}

function resetInput() {
    inputCity.value = '';
}

function displayError(error) {
    errorMessage.textContent = error;
}

function removeError() {
    errorMessage.textContent = '';
}

function displayBackground() {    
    const weatherCode = dataCurrent.condition.code.toString();
    const imageData = backgrounds.find(data => data.code.includes(weatherCode));

    if (dataCurrent.is_day === 1) {
        backgroundImg.src = imageData.day.src;
        backgroundImg.alt = imageData.day.alt;
        setTheme('day', imageData);
    } else {
        backgroundImg.src = imageData.night.src;
        backgroundImg.alt = imageData.night.alt;
        setTheme('night', imageData);
    }
}

function setTheme(time, imageData) {
    if (time === 'day') {
        searchBtn.style.background = imageData.day.theme;
    } else {
        searchBtn.style.background = imageData.night.theme;
    }
}

function showMenu() {
    weatherSidebar.classList.add('weather-sidebar-hide');
    menu.classList.add('menu-hide');
    dataMain.classList.add('data-main-slide');

    menuModal.classList.add('menu-modal-show');
}

function hideMenu() {
    weatherSidebar.classList.remove('weather-sidebar-hide');
    menu.classList.remove('menu-hide');
    dataMain.classList.remove('data-main-slide');

    menuModal.classList.remove('menu-modal-show');
}

const eventHandlers = (() => {

    searchBtn.addEventListener('click', () => {
        if (searchBtn.classList.contains('inactive')) return;
        searchCity(inputCity.value);
    });

    inputCity.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (searchBtn.classList.contains('inactive')) return;
            searchCity(inputCity.value);
        }
    });
    
    searchedLcn.forEach(li => {
        li.addEventListener('click', () => {
            if (searchBtn.classList.contains('inactive')) return;
            searchCity(li.textContent);
        });
    });

    menu.addEventListener('click', showMenu);
    menuModal.addEventListener('click', (e) => {
        if (e.target === menuModal) {
            hideMenu();
        }
    });

})();

export { 
    eventHandlers, 
    startLoading,
    endLoading,
    updateHistoryInterface,
    displayData,
    resetInput,
    displayError,
    removeError,
    displayBackground
}