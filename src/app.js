const history = ['London', 'Buenos Aires', 'Tokyo', 'Manila'];

function updateHistory(city) {
    if(history.includes(city)) {
        const index = history.indexOf(city);
        history.splice(index, 1);
    } else {
        history.pop();
    }

    history.push(city);
}

function emptyInputError(city) {
    const onlySpaces = /^ +$/;

    if (city.length === 0 || onlySpaces.test(city)) {
        console.log('Please input a city');
        return true;
    }
    
    return false;
}

function searchCity(city) {
    if (emptyInputError(city)) return;

    const link = `http://api.weatherapi.com/v1/current.json?key=e3b1dd72d6964d4187050305230608&q=${city}&aqi=no`;
    fetchWeather(link);
}

async function fetchWeather(link) {
    try {
        const response = await fetch(link, {mode: 'cors'});

        if (!response.ok) {
            throw response;
        }

        const weatherData = await response.json();
        console.log(weatherData);
    } catch(err) {
        const errorData = await err.json();
        console.log(errorData.error.message);
        throw errorData;
    }
}

// fetchWeather(link).then(() => console.log('finished'))
// .catch((errorData) => console.log(errorData));

export { searchCity }