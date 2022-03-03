/* Get Global Variables */
const searchInput = document.getElementById('weather-input')


/* Get Variables */
const getVar = id => document.getElementById(id)

/*  Set InnerText */
const innerText = (id, text) => getVar(id).innerText = text


/* Search Weather Function */
const searchWeather = () => {
     
    const API_KEY = `270df15f043e6cbd04e00a2a72c161a5`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=${API_KEY}`;
    fetch(URL)
    .then(res => res.json())
        .then(json => printWeather(json))
    searchInput.value = ''
}

/* Print Data in UI */
const printWeather = json => {
    if (json.message === 'city not found') {
        innerText('error-msg', 'No City Found ❌')
    }else{
    innerText('city', json.name)
    innerText('temp', json.main.temp)
    innerText('weather', json.weather[0].main)
        getVar('icon').setAttribute('src', `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`)
        innerText('error-msg', '')
    }
    
}
