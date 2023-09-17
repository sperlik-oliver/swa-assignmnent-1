const citySelect = document.getElementById('city-select');

document.addEventListener('DOMContentLoaded', () => {
    
    citySelect.addEventListener('change', () => {
      loadWeatherData(citySelect.value, displayWeatherData);
    });
  
    loadWeatherData(citySelect.value, displayWeatherData);
    loadForecastData(citySelect.value, displayForecast);
  
    function displayWeatherData(weatherDataObjects) {
      displaySummary(weatherDataObjects);
      displayLatestMeasurements(weatherDataObjects);
    }
  
  });