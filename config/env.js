const dotenv = require('dotenv');

dotenv.config();

const requiredVariables = ['PORT', 'MONGODB_URI', 'CORS_ORIGIN'];
const missingVariables = requiredVariables.filter((name) => !process.env[name]);

if (missingVariables.length > 0) {
  throw new Error(Variabel konfigurasi belum diisi: );
}

module.exports = {
  port: process.env.PORT,
  mongodbUri: process.env.MONGODB_URI,
  corsOrigin: process.env.CORS_ORIGIN,
};
