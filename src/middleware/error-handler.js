const { CustomError } = require("../errors");

function errorHandler(err, req, res, next) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors(),
      success: false,
    });
  }

  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
    success: false,
  });
}

module.exports = {
  errorHandler,
};
