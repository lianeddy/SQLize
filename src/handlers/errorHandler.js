const errorHandler = (err, req, res, next) => {
  console.error(err);
  const { statusCode, message } = err;
  return res.status(statusCode || 500).json({
    message:
      "There's an error on the server. Please contact the administrator.",
    error: message,
  });
};

module.exports = errorHandler;
