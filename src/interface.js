import { searchCity } from './app';
import { format } from 'date-fns';
import { weatherBackgrounds, animalBackgrounds } from './backgrounds';

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
const toggleTempBtn = document.querySelector('#toggle-temp-btn');
const toggleBgBtn = document.querySelector('#toggle-bg-btn');
const toggleBtn = document.querySelectorAll('.toggle-btn');

const backgroundContainer  = document.querySelector('.background');
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
    if (toggleTempBtn.dataset.activeTemp === 'c') {
        temp = 'fahrenheit';
        toggleTempBtn.dataset.activeTemp = 'f';
    } else {
        temp = 'celsius';
        toggleTempBtn.dataset.activeTemp = 'c';
    }

    displayTemperature();
}

function displayTemperature() {
    if (temp === 'celsius') {
        temperature.textContent = dataCurrent.temp_c + '°';
        feelsLike.textContent = dataCurrent.feelslike_c + '°';
    } else {
        temperature.textContent = dataCurrent.temp_f + '°';
        feelsLike.textContent = dataCurrent.feelslike_f + '°';
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

function setTheme(time, imageData) {
    if (time === 'day') {
        searchBtn.style.background = imageData.day.theme;
        toggleBtn.forEach(btn => btn.style.background = `linear-gradient(#00000077, #00000021 3%, ${imageData.day.theme} 12%)`);
    } else if (time === 'night') {
        searchBtn.style.background = imageData.night.theme;
        toggleBtn.forEach(btn => btn.style.background = `linear-gradient(#00000077, #00000021 3%, ${imageData.night.theme} 12%)`);
    } else {
        searchBtn.style.background = imageData.theme;
        toggleBtn.forEach(btn => btn.style.background = `linear-gradient(#00000077, #00000021 3%, ${imageData.theme} 12%)`);
    }
}

let indexHistory = [];
function randomIndex() {
    const selectedIndex = Math.floor(Math.random() * animalBackgrounds.length);
    if (indexHistory.includes(selectedIndex)) return randomIndex();

    indexHistory.unshift(selectedIndex);
    if (indexHistory.length > 5) indexHistory.pop();

    return selectedIndex;
}

let activeBackground = 'weather';

function toggleActiveBackground() {
    if (activeBackground === 'weather') {
        toggleBgBtn.dataset.activeBg = 'animals';
        activeBackground = 'animals';
    } else {
        toggleBgBtn.dataset.activeBg = 'weather';
        activeBackground = 'weather';
    }

    displayBackground();
}

const loadAnimalBackground = new Promise((resolve, reject) => {
    const selectedBg = animalBackgrounds[randomIndex()];
    const idApi = selectedBg.id;

    fetch(`https://api.pexels.com/v1/photos/${idApi}`, {
        headers: {
            Authorization: 'k1QAYhe230dwOf6Gl2FFjoH6czizpYh1u1mGPJto1Vwy6gJ5ArAc5LGd'
        },
        mode: 'cors'
    })

    .then(response => {
        if (!response.ok) {
            throw new Error('Error fetching image data from Pexels API');
        }

        return response.json();
    })
    .then(picData => picData.src.large2x)
    .then((link) => {
        const img = new Image();
        img.src = link;

        img.onload = () => resolve(img);
        img.onerror = () => reject('Loading Animal Image Error');
    })

    .catch(error => reject(error));
});

const requestLimit = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(() => console.log('loading timed out'))
    }, 5000);
});

async function setAnimalBackground() {
    Promise.race([loadAnimalBackground, requestLimit])
    .then((img) => {
        backgroundContainer.innerHTML = '';
        backgroundContainer.appendChild(img);
    })
    .catch((error) => alert(error));
}

function setWeatherBackground() {
    const weatherCode = dataCurrent.condition.code.toString();
    const imageData = weatherBackgrounds.find(data => data.code.includes(weatherCode));
    const img = new Image();

    console.log(weatherCode, imageData);
    if (dataCurrent.is_day === 1) {
        img.src = imageData.day.src;
        img.alt = imageData.day.alt;
        setTheme('day', imageData);
    } else {
        img.src = imageData.night.src;
        img.alt = imageData.night.alt;
        setTheme('night', imageData);
    }

    backgroundContainer.innerHTML = '';
    backgroundContainer.appendChild(img);
}

async function displayBackground() {    
    // if (activeBackground === 'animals') {
    //     setAnimalBackground();
    // } else {
    //     setWeatherBackground();
    // }
    setWeatherBackground();
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
            inputCity.value = li.textContent;
            searchCity(li.textContent);
        });
    });

    menu.addEventListener('click', showMenu);
    menuModal.addEventListener('click', (e) => {
        if (e.target === menuModal) {
            hideMenu();
        }
    });

    toggleTempBtn.addEventListener('click', () => {
        if (searchBtn.classList.contains('inactive')) return;
        setTemperature();
    });

    toggleBgBtn.addEventListener('click', () => {
        if (searchBtn.classList.contains('inactive')) return;
        toggleActiveBackground();
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