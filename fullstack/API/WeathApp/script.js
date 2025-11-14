// create a new node app
import express from 'express';
import https from 'https';

//initialize a new express app
const app = express();

app.get('/', function (req, res) {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=Tamale&appid=7da51fcd67b2bed49eab674bcc25bcc1&units=metric';
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on('data', function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const pressure = weatherData.main.pressure;
      const discrip = weatherData.weather[0].description;
      console.log(temp);
      console.log(pressure);
      console.log(discrip);
    });
  });
  res.send('the app is up and running.');
});

app.listen(3000, function () {
  console.log('the server is running on port:3000');
});
