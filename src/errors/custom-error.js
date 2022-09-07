class CustomError extends Error {
  statusCode;

  constructor(message) {
    super();

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  serializeErrors() {}
}

module.exports = {
  CustomError,
};
