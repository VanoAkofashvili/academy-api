const { CustomError, BadRequestError } = require("../errors");

function errorHandler(err, req, res, next) {
  if (err instanceof CustomError) {
    console.log("movida", err.message);
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
