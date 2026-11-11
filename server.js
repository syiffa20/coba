const app = require('./app');
const connectDatabase = require('./config/database');
const { port } = require('./config/env');

async function startServer() {
  try {
    await connectDatabase();
    app.listen(port, () => {
      console.log('Server berjalan di port ' + port);
    });
  } catch (error) {
    console.error('Gagal terhubung ke MongoDB. Proses dihentikan.');
    process.exit(1);
  }
}

startServer();
