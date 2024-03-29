const express = require('express');
const app = express();

const test = require('./routes/test.routes')

const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(test)

app.get('/', (req, res) => {
    const name = process.env.NAME || 'World';
    res.send(`Hello ${name}!`);
  });

module.exports = app;