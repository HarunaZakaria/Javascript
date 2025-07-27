const express = require('express');
const app = express();
const port = 5000;

//middlewears
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//post route to accept form or frontend data
app.post('/submit', (req, res) => {
  const userData = req.body; // get user data from body
  console.log(userData);

  res.send(`User data received!: ${userData.name}`);
});

// start server
app.listen(port, () => {
  console.log(` Server runing at http://localhost:${port}`);
});
