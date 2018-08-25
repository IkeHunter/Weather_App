const request = require('request');

var getWeather = (lat, lng, callback) => {


  request({
    url: `https://api.darksky.net/forecast/3d5e0f49c4e49ccf017cdadc2cbedfd5/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
