/* Get Global Variables */
const searchInput = document.getElementById('weather-input')


/* Get Variables */
const getVar = id => document.getElementById(id)

// Set InnerText
const innerText = (id, text) => getVar(id).innerText = text


/* Search Weather Function */
const searchWeather = () => {
    innerText('city', 'Something')
}