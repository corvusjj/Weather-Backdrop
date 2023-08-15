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