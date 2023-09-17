function postWeatherData(data) {
  try {
    fetch(`${BASE_URL}/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then(() => {
      alert('Data saved successfully!');
    })
  } catch (e) {
    alert('Error saving data.')
    console.error(JSON.stringify(e))
  }
}
