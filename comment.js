// Create web server using express
const express = require('express');
const app = express();

// Create a port to listen to
const port = 3000;

// Create a route for get request
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Create a route for post request
app.post('/', (req, res) => {
  res.send('Got a POST request')
});

// Create a route for put request
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
});

// Create a route for delete request
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
});

// Listen to port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});