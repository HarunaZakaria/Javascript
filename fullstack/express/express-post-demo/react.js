fetch('http://localhost:5000/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'React User',
    email: 'react@example.com',
  }),
})
  .then((res) => res.text())
  .then((data) => console.log(data));
