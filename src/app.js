// Initialize the Weather object
const weather = new Weather('Ikeja', 'Lagos');
// Initialize the UI object
const ui = new UI();

// Initially hide the modal form.
ui.modal.style.display = 'none';
UI.modalButtonsFunctions();

ui.changeLocationButton.addEventListener('click', function() {
  ui.mainApp.style.display = 'none';
  ui.modal.style.display = 'block';

  ui.modal.classList.add('modal-app');
});

ui.closeButton.addEventListener('click', UI.modalButtonsFunctions);

ui.tinyCloseButton.addEventListener('click', UI.modalButtonsFunctions);

ui.saveChangesButton.addEventListener('click', function() {
  ui.mainApp.style.display = 'block';
  ui.mainApp.classList.add('main-app');
  ui.modal.style.display = 'none';
  const city = ui.city.value;
  const state = ui.state.value;
  ui.weatherLocation.textContent = `${city}, ${state}`;
});

weather
  .getGeolocation()
  .then(result => {
    let lat, long;

    lat = result[0];
    long = result[1];
    // Call the weather function with the generated latitude and longitude
    weather
      .getWeather(lat, long)
      .then(result => {
        // paint the UI with the result passed in
        console.log(result);
        ui.paint(result);
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
