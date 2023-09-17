function loadWeatherData(city, callback) {
    try {
        fetch(`${BASE_URL}/data/${city}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Unable to fetch weather data')
          }
          return response.json();
        })
        .then(data => {
          const weatherData = data.map(({ time, place, value, unit, direction, precipitation_type, type }) => {
            switch (type) {
              case 'temperature':
                return createTemperature(
                  time,
                  place,
                  value,
                  unit
                );
              case 'wind speed':
                return createWind(
                  time,
                  place,
                  value,
                  unit,
                  direction
                );
              case 'precipitation':
                return createPrecipitation(
                  time,
                  place,
                  value,
                  unit,
                  precipitation_type
                );
              case 'cloud coverage':
                return createCloudCoverage(
                  time,
                  place,
                  value,
                  unit
                );
              default:
                throw new Error(`Unknown weather type: ${type}`)
            }
          });
          callback(weatherData);
        })
    } catch (e) {
        alert('Failed to fetch weather data.')
        console.error(JSON.stringify(e))
    }
  }

  function loadForecastData(city, callback) {
    try {
        fetch(`${BASE_URL}/forecast/${city}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Unable to fetch forecast data.');
          }
          return response.json();
        })
        .then((data) => {
          const forecastData = data.map(({ type, time, place, from, to, unit, precipitation_types, directions }) => {
            switch (type) {
              case 'temperature':
                return createTemperaturePrediction(
                  time,
                  place,
                  from,
                  to,
                  unit
                );
              case 'precipitation':
                return createPrecipitationPrediction(
                  time,
                  place,
                  from,
                  to,
                  precipitation_types,
                  unit
                );
              case 'wind speed':
                return createWindPrediction(
                  time,
                  place,
                  from,
                  to,
                  directions,
                  unit
                );
              case 'cloud coverage':
                return createCloudCoveragePrediction(
                  time,
                  place,
                  from,
                  to,
                  unit
                );
              default:
                console.error(`Unknown forecast type: ${type}`)
            }
          });
          callback(forecastData);
        })
    } catch (e) {
        alert('Failed to fetch forecast data.')
        console.error(JSON.stringify(e))
    }
  }