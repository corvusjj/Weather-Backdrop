import { 
    startLoading, 
    endLoading, 
    updateHistoryInterface, 
    displayData, 
    resetInput, 
    displayError, 
    removeError,
    displayBackground 
} from "./interface";

const history = ['London', 'Buenos Aires', 'Tokyo', 'Manila'];
let activeData;

function updateHistory() {
    const city = activeData.location.name;

    if(history.includes(city)) {
        const index = history.indexOf(city);
        history.splice(index, 1);
    } else {
        history.pop();
    }

    history.unshift(city);
    updateHistoryInterface(history);
}

function emptyInputError(city) {
    const onlySpaces = /^ +$/;

    if (city.length === 0 || onlySpaces.test(city)) {
        displayError('Please input a city / location.');
        return true;
    }
    
    return false;
}

async function searchCity(city) {
    if (emptyInputError(city)) return;

    startLoading();
    removeError();

    const link = `http://api.weatherapi.com/v1/current.json?key=e3b1dd72d6964d4187050305230608&q=${city}&aqi=no`;
    await fetchWeather(link)

    .then(() => {
        updateHistory();
        displayData(activeData);
        resetInput();

        displayBackground();
    })

    .catch(displayError)

    .finally(() => {
        endLoading();
    });
}

async function fetchWeather(link) {
    try {
        const response = await fetch(link, {mode: 'cors'});

        if (!response.ok) {
            throw response;
        }

        const weatherData = await response.json();
        activeData = weatherData;

    } catch(err) {
        const errorData = await err.json();
        console.log(errorData);
        throw errorData.error.message;
    }
}

export { searchCity }

//  sources / responsive designs / tooltips