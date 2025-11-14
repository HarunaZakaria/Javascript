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
      const city = weatherData.name;
      const discrip = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURl = 'https://openweathermap.org/img/w/'+icon+'.png';
      const tempDiscrip = ``;
      res.write(
        '<h1>The current weather is ' +
          temp +
          'in ' +
          city +
          'and the description is: ' +
          discrip +
          '</h1>'
      );
      res.write('<img src=' + imgURl + '>');

      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log('the server is running on port:3000');
});
