const { CustomError } = require("./custom-error");

class ServerError extends CustomError {
  statusCode = 404;

  constructor() {
    super("Internal server error");
    Object.setPrototypeOf(this, ServerError.prototype);
  }
  serializeErrors() {
    return [{ message: "Internal server error" }];
  }
}

module.exports = {
  ServerError,
};
