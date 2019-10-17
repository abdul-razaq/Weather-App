// Fetch the weather data from an external Weather API
// The weather data object constructor
class Weather {
  constructor(city, state) {
    this.weatherApiKey = '369ddabb49c206afcb90574c891312c8';
    this.geolocationApiKey = 'cd2b5b769d5f471a8f73429a1ea9317c';
    this.city = city;
    this.state = state;
  }

  // Fetch Geometry coordinates of the city ans state passed
  async getGeolocation() {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/geojson?q=${this.city},${this.state}&key=${this.geolocationApiKey}
    `);
    // Grab the response data
    const responseData = await response.json();
    return responseData.features[0].geometry.coordinates
  }

  // Fetch weather from API
  async getWeather(lat, long) {
    // await for the fetch response
    const response = await fetch(`https://api.darksky.net/forecast/${this.weatherApiKey}/${lat},${long}?exclude=minutely,hourly,daily,alerts,flags?units=si`);
    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
