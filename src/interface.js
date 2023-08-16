import { searchCity } from './app';

const inputCity = document.querySelector('#input-city');
const searchBtn = document.querySelector('#search');
const dataContainer = document.querySelector('.data-container');
const loadingContainer = document.querySelector('.loading-container');
const pendingCity = document.querySelector('#pending-city');
const historyList = document.querySelector('#search-history > ul');

const eventHandlers = (() => {

    searchBtn.addEventListener('click', () => {
        searchCity(inputCity.value);
    });
    
})();

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

export { 
    eventHandlers, 
    startLoading,
    endLoading,
    updateHistoryInterface
}