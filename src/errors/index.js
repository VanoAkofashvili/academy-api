const { CustomError } = require("./custom-error");
const { BadRequestError } = require("./bad-request");
const { NotAuthorizedError } = require("./not-authorized");
const { NotFoundError } = require("./not-found");

module.exports = {
  CustomError,
  BadRequestError,
  NotAuthorizedError,
  NotFoundError,
};
