function notFoundHandler(req, res, next) {
  const error = new Error('Rute tidak ditemukan');
  error.statusCode = 404;
  next(error);
}

function errorHandler(error, req, res, next) {
  let statusCode = 500;
  let responseBody;

  if (error.type === 'entity.parse.failed' || (error instanceof SyntaxError && error.status === 400 && 'body' in error)) {
    statusCode = 400;
    responseBody = { message: 'Format JSON tidak valid' };
  } else if (error.name === 'CastError') {
    statusCode = 400;
    responseBody = { message: 'ID tidak valid' };
  } else if (error.name === 'ValidationError') {
    statusCode = 400;
    responseBody = {
      message: 'Data tidak valid',
      detail: Object.values(error.errors).map((item) => item.message),
    };
  } else if (error.code === 11000) {
    statusCode = 409;
    responseBody = { message: 'Nilai unik sudah digunakan' };
  } else {
    const explicitStatus = error.statusCode || error.status;
    if (Number.isInteger(explicitStatus) && explicitStatus >= 400 && explicitStatus < 500) {
      statusCode = explicitStatus;
      responseBody = { message: error.message || 'Permintaan tidak dapat diproses' };
    } else {
      statusCode = 500;
      responseBody = { message: 'Terjadi kesalahan pada server' };
    }
  }

  res.status(statusCode).json(responseBody);
}

module.exports = { notFoundHandler, errorHandler };
