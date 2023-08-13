let link = 'http://api.weatherapi.com/v1/current.json?key=e3b1dd72d6964d4187050305230608&q=london&aqi=no';

async function fetchWeather(link) {
    try {
        const response = await fetch(link, {mode: 'cors'});

        if (!response.ok) {
            throw response;
        }

        const weatherData = await response.json();
        console.log(weatherData.location);
    } catch(err) {
        const errorData = await err.json();
        console.log(errorData.error.message);
        throw errorData;
    }
}

fetchWeather(link).then(() => console.log('finished'))
.catch((errorData) => console.log(errorData));