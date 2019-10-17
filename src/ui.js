class UI {
  constructor() {
    (this.mainApp = document.querySelector('main')),
      (this.weatherLocation = document.querySelector('.location')),
      (this.weatherDescription = document.querySelector('#w-description')),
      (this.weatherTemperatureString = document.querySelector(
        '#w-temperatureString'
      )),
      (this.descriptionTemperature = document.querySelector(
        '.description-temperature'
      )),
      (this.wind = document.querySelector('#w-wind')),
      (this.city = document.querySelector('#city')),
      (this.state = document.querySelector('#state')),
      (this.feelsLike = document.querySelector('#w-feels-like')),
      (this.dewpoint = document.querySelector('#w-dewpoint')),
      (this.humidity = document.querySelector('#w-humidity')),
      (this.listGroup = document.querySelector('.list-group')),
      (this.listGroupItems = document.querySelector('.list-group__items')),
      (this.changeLocationButton = document.querySelector('.btn__modal')),
      (this.modal = document.querySelector('.modal')),
      (this.modalHeader = document.querySelector('.modal__head h5')),
      (this.tinyCloseButton = document.querySelector('.close')),
      (this.formGroup = document.querySelector('.form__group')),
      (this.formLabel = document.querySelector('.form__label')),
      (this.formInput = document.querySelector('.form__input')),
      (this.modalFooter = document.querySelector('.modal__footer')),
      (this.closeButton = document.querySelector('.btn__close')),
      (this.saveChangesButton = document.querySelector('.btn__saveChanges'));
  }

  paint(weather) {
    this.weatherLocation.textContent = '';
    this.weatherDescription.textContent = weather.currently.summary;
    this.weatherTemperatureString.textContent = `Current Temperature: ${weather.currently.temperature} Celsius`;
    this.humidity.textContent = `Relative Humidity: ${weather.currently.humidity}`;
    this.dewpoint.textContent = `Relative DewPoint: ${weather.currently.dewPoint}`;
    this.feelsLike.textContent = `Feels Like: ${weather.currently.precipType}`;
    this.wind.textContent = `Wind: From the NW at ${weather.currently.windSpeed} MPH Speed Gusting to ${weather.currently.windGust} MPH`;
  }

  // Function for the modal buttons to return back the main app
  static modalButtonsFunctions() {
    document.querySelector('main').style.display = 'block';
    document.querySelector('main').classList.add('main-app');
    document.querySelector('.modal').style.display = 'none';
  }
}
