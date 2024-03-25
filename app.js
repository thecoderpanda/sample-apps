const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

// Middleware for logging
app.use(morgan('tiny'));

// Simple logger function
const logger = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
  next();
};

// Using custom logger as middleware
app.use(logger);

// GET route 1
app.get('/', (req, res) => {
  console.log('Handling GET request to /');
  res.send('Hello, GET request to /!');
});

// POST route
app.post('/post', express.json(), (req, res) => {
  console.log('Handling POST request to /post', req.body);
  res.send({ message: 'Received your POST request!', data: req.body });
});

// GET route 2 (random path for demonstration)
app.get('/random', (req, res) => {
  console.log('Handling GET request to /random');
  const randomNum = Math.floor(Math.random() * 100);
  res.send({ message: 'Your random number is:', number: randomNum });
});

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
