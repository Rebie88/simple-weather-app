
const request = require('request');
const argv = require('yargs').argv;

let apiKey = '39f6c91ef6ef9a0d52ad5948fca6a178';
let city = argv.c || 'Seattle';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});