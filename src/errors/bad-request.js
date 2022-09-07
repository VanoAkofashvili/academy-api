const { CustomError } = require("./custom-error");

class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
    this.message = message;
  }

  serializeErrors() {
    console.log(this);
    return [{ message: this.message }];
  }
}

module.exports = {
  BadRequestError,
};
