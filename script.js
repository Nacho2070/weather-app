const searchButton = document.getElementById('search')
let baseURL = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey= 'ca98ebe5a7d9b65aaee6e0142fe274d4';
let dfKelvin = 273.15;

searchButton.addEventListener('click',() =>{
      const city = document.getElementById('ciudadEntrada').value;
      if(city){
          fetchWeather(city);
          city.value = "";
      }
})
function fetchWeather(city){
    fetch(`${baseURL}?q=${city}&appid=${apiKey}`)
    .then( response => response.json())
    .then( response => weatherData(response))
    .catch(error => console.error('Error fetching weather:', error));

}

function weatherData(response){
    const divWeatherDate = document.getElementById('weatherDate');
    divWeatherDate.style.display = "block";
    divWeatherDate.innerHTML = '';
    divWeatherDate.innerHTML
    const cityName = response.name;
    const countryName = response.sys.country;
    const cityTemperature = response.main.temp;
    const description = response.weather[0].description;

    const titleCity = document.createElement('h2');
    titleCity.textContent = `${cityName},${countryName}` 

    const tempCity = document.createElement('p');
    tempCity.textContent = `The temperature is: ${Math.floor(cityTemperature-dfKelvin)}°C`
    
    const descript = document.createElement('p');
    descript.textContent = description
    
    divWeatherDate.appendChild(titleCity)
    divWeatherDate.appendChild(tempCity)
    divWeatherDate.appendChild(descript)
}
