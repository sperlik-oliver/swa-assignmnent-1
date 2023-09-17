function postWeatherData(data) {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${BASE_URL}/data`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.status === 201) {
        alert('Data saved successfully!');
      } else {
        alert('Error saving data.');
      }
    };
    xhr.send(JSON.stringify(data));
} catch (e) {
    alert('Error saving data.')
    console.error(JSON.stringify(e))
  }
}
