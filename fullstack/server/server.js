// import http from 'http';

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { ' Content-Type': 'text/plain' });
//   res.end('Hello from Harunzy  fullstack dev');
// });

// server.listen(3000, () => {
//   console.log('server running on http://localhost:3000');
// });

const http = require('http'); // Load Node's built-in http module

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set header
  res.end('Hello from Node.js Server!'); // Send response
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
