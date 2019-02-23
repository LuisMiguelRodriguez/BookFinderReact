const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();

// database setup
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/bookfinder', {
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    greeting: `Hello ${name}!`
  }));
});

app.listen(PORT, () =>
  console.log('Express server is running on localhost:3001')
);
