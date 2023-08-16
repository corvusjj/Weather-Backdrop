import { searchCity } from './app';

const searchBtn = document.querySelector('#search');

const eventHandlers = (() => {

    searchBtn.addEventListener('click', () => {
        const inputCity = document.querySelector('#input-city');
        searchCity(inputCity.value);
    });
    
})();

export { eventHandlers }