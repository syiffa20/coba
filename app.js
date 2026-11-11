const express = require('express');
const cors = require('cors');
const { corsOrigin } = require('./config/env');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');
const dokterHewanRoutes = require('./routes/dokterHewanRoutes');
const pemeriksaanRoutes = require('./routes/pemeriksaanRoutes');

const app = express();

app.use(cors({
  origin: corsOrigin,
  methods: ['GET', 'POST'],
}));
app.use(express.json());

app.use('/api/dokter-hewan', dokterHewanRoutes);
app.use('/api/pemeriksaan', pemeriksaanRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
