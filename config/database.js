const mongoose = require('mongoose');
const { mongodbUri } = require('./env');

async function connectDatabase() {
  await mongoose.connect(mongodbUri);
  return mongoose.connection;
}

module.exports = connectDatabase;
