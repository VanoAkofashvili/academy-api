const { transformSuccess } = require('../utils');
const { faker } = require('@faker-js/faker');
const jwt = require('jsonwebtoken');

const userId = faker.database.mongodbObjectId();
const email = 'test@test.com';

async function getUser(req, res) {
  try {
    const user = {
      id: userId,
      firstName: 'Vaniko',
      lastName: 'Akopashvili',
      email,
      token: jwt.sign(
        {
          id: userId,
          email,
        },
        'secret_key'
      ),
    };
  } catch (err) {
    console.log(err);
  }
  res.status(200).send(transformSuccess(user));
}

module.exports = {
  getUser,
};
