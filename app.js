const request = require('request');

const url = 'https://api.darksky.net/forecast/69a34aa5c7f8c47e51feac9b644c2d36/37.8267,-122.4233?units=si&exclude=hourly,minutely,flags,offset';

request({ url: url, json: true }, (error, response) => {
  const { currently, daily } = response.body;

  console.log(`${daily.data[0].summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rain.`);
})