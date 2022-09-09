const { transformSuccess } = require("../utils");
const { faker } = require("@faker-js/faker");
const jwt = require("jsonwebtoken");
const { ServerError } = require("../errors/server-error");

const userId = faker.database.mongodbObjectId();
const email = "test@test.com";

async function getUser(req, res) {
  try {
    const user = {
      id: userId,
      firstName: "Vaniko",
      lastName: "Akopashvili",
      email,
      token: jwt.sign(
        {
          id: userId,
        },
        "secret_key"
      ),
    };
    res.status(200).send(transformSuccess(user));
  } catch (err) {
    throw new ServerError();
  }
}

module.exports = {
  getUser,
};
