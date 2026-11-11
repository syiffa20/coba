const express = require('express');
const cors = require('cors');
const { corsOrigin } = require('./config/env');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(cors({
  origin: corsOrigin,
  methods: ['GET', 'POST'],
}));
app.use(express.json());

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
