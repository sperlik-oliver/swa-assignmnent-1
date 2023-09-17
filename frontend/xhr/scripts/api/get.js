function loadWeatherData(city, callback) {
  try {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${BASE_URL}/data/${city}`, true);
  xhr.onload = () => {
    if (this.status == 200) {
      const data = JSON.parse(this.responseText);
      const weatherData = data.map((item) => {
        switch (item.type) {
          case 'temperature':
            return createTemperature(
              item.time,
              item.place,
              item.value,
              item.unit
            );
          case 'wind speed':
            return createWind(
              item.time,
              item.place,
              item.value,
              item.unit,
              item.direction
            );
          case 'precipitation':
            return createPrecipitation(
              item.time,
              item.place,
              item.value,
              item.unit,
              item.precipitation_type
            );
          case 'cloud coverage':
            return createCloudCoverage(
              item.time,
              item.place,
              item.value,
              item.unit
            );
          default:
            throw new Error(`Unknown weather type: ${item.type}`);
        }
      });
      callback(weatherData);
    }
  };
  xhr.send();
} catch (e) {
  alert('Failed to fetch weather data.')
  console.error(JSON.stringify(e))
}
}

function loadForecastData(city, callback) {
  try {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${BASE_URL}/forecast/${city}`, true);
  xhr.onload = () => {
    if (this.status == 200) {
      const data = JSON.parse(this.responseText);
      const forecastData = data.map((item) => {
        switch (item.type) {
          case 'temperature':
            return createTemperaturePrediction(
              item.time,
              item.place,
              item.from,
              item.to,
              item.unit
            );
          case 'precipitation':
            return createPrecipitationPrediction(
              item.time,
              item.place,
              item.from,
              item.to,
              item.precipitation_types,
              item.unit
            );
          case 'wind speed':
            return createWindPrediction(
              item.time,
              item.place,
              item.from,
              item.to,
              item.directions,
              item.unit
            );
          case 'cloud coverage':
            return createCloudCoveragePrediction(
              item.time,
              item.place,
              item.from,
              item.to,
              item.unit
            );
          default:
            throw new Error(`Unknown forecast type: ${item.type}`);
        }
      });
      callback(forecastData);
    }
  };
  xhr.send();
} catch (e) {
  alert('Failed to fetch forecast data.')
  console.error(JSON.stringify(e))
}
}