const express = require('express');
const cors = require('cors');
const { corsOrigin } = require('./config/env');

const app = express();

app.use(cors({
  origin: corsOrigin,
  methods: ['GET', 'POST'],
}));
app.use(express.json());

module.exports = app;
