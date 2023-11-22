function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    // const apiKey = 447173f0f2ff0b675af21b5548319c92
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=447173f0f2ff0b675af21b5548319c92&units=metric`;

    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const cityElement = document.getElementById('city');
    const descriptionElement = document.getElementById('description');
    const temperatureElement = document.getElementById('temperature');
    const humidityElement = document.getElementById('humidity');
    const windSpeedElement = document.getElementById('windSpeed');

    cityElement.textContent = `${data.name}, ${data.sys.country}`;
    descriptionElement.textContent = data.weather[0].description;
    temperatureElement.textContent = `Temperature: ${data.main.temp} °C`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    weatherInfo.classList.remove('hidden');
}
