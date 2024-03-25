// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Change this if you have a different port in mind

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  console.log(req.body); // Log the received data to the console
  // Here, you might save the data to a database or file
  res.send({ status: 'Data received!' });
});

app.listen(port, '192.168.0.234', () => {
  console.log(`Server listening at http://192.168.0.234:${port}`);
});