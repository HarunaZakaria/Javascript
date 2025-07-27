const express = require('express'); //import expree
const app = express(); // create express app
const port = 3000; // listen port

//routes

//home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home page');
});

//about route
app.get('/about', (req, res) => {
  res.send('Welcome to the About page');
});

//service route
app.get('/service', (req, res) => {
  res.send('Welcome to the Service page');
});

//contact route
app.get('/contact', (req, res) => {
  res.send('Welcome to the Contact page');
});

//blog route
app.get('/blog', (req, res) => {
  res.send('Welcome to the Blog page');
});

//statr server
app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);
});
