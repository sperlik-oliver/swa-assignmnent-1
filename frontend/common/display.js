const latestDiv = document.getElementById('latest-measurements');
const forecastDiv = document.getElementById('forecast');
const summaryDiv = document.getElementById('summary');

const displayLatestMeasurements = (data) => {
    const processItem = (type) => data.filter(item => item.getType() === type).pop().getValue()

    const latestTemperature = processItem('temperature')
    const latestPrecipitation = processItem('precipitation')
    const latestWindSpeed = processItem('wind speed')
    const latestCloudCoverage = processItem('cloud coverage')

    latestDiv.innerHTML = `
            Temperature: ${latestTemperature}°C <br>
            Precipitation: ${latestPrecipitation} mm <br>
            Wind Speed: ${latestWindSpeed} m/s <br>
            Cloud coverage: ${latestCloudCoverage} %
        `;
  }

  const displayForecast = (forecast) => {
    let forecastHTML = '';
    forecast.forEach(item => {
      let detailsHTML = '';

      if (item.getExpectedTypes) {
        detailsHTML += `<strong>Expected Types:</strong> ${
          item
          .getExpectedTypes() ?? []
          .join(', ')} <br>`;
      }
      if (item.getExpectedDirections) {
        detailsHTML += `<strong>Expected Directions:</strong> ${
          item
          .getExpectedDirections()
          .join(', ')} <br>`;
      }

      forecastHTML += `<div>
              <strong>Type:</strong> ${item.getType()} <br>
              <strong>Time:</strong> ${item.getTime()} <br>
              <strong>From:</strong> ${item.getMin()} ${item.getUnit()} <br>
              <strong>To:</strong> ${item.getMax()} ${item.getUnit()} <br>
              ${detailsHTML}
          </div><hr>`;
    });

    forecastDiv.innerHTML = forecastHTML;
  }

  const displaySummary = (data) => {
    const processItem = (type) => data.filter(item => item.getType() === type).map(item => item.getValue())
    const getAverage = (arr) => arr.reduce((acc, currentValue) => acc + currentValue, 0) / arr.length

    const temperatures = processItem('temperature')
    const minTemp = Math.min(...temperatures);
    const maxTemp = Math.max(...temperatures);

    const precipitation = processItem('precipitation')
    const avgPrecipitation = getAverage(precipitation)

    const windSpeed = processItem('wind speed')
    const avgWindSpeed = getAverage(windSpeed)

    const cloudCoverage = processItem('cloud coverage')
    const avgCloudCoverage = getAverage(cloudCoverage)

    summaryDiv.innerHTML = `
            Minimum Temperature: ${minTemp}°C <br>
            Maximum Temperature: ${maxTemp}°C <br>
            Precipitation: ${avgPrecipitation} mm <br>
            Wind speed: ${avgWindSpeed.toFixed(2)} m/s <br>
            Cloud coverage: ${avgCloudCoverage.toFixed(2)} %
        `;
  }