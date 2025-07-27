const http = require('http'); // Load the HTTP module
const server = http.createServer((req, res) => {
  const url = req.url; // Get the requested URL path

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page!');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the About Page.');
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contact us at contact@example.com');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
