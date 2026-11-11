const dotenv = require('dotenv');

dotenv.config();

const requiredVariables = ['PORT', 'MONGODB_URI', 'CORS_ORIGIN'];
const missingVariables = requiredVariables.filter((name) => !process.env[name]);

if (missingVariables.length > 0) {
  throw new Error('Variabel konfigurasi belum diisi: ' + missingVariables.join(', '));
}

const port = Number(process.env.PORT);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT harus berupa angka antara 1 dan 65535');
}

module.exports = {
  port,
  mongodbUri: process.env.MONGODB_URI,
  corsOrigin: process.env.CORS_ORIGIN,
};
