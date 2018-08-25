const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
.help()
.alias('help','h')
.argv;

const address = argv.address;

geocode.geocodeAddress(address, (errorMessage, results) =>{
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(`Location: ${results.address}`);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
      }
    });
  }
});
