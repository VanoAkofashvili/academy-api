const { transformSuccess } = require('../utils');
const { faker } = require('@faker-js/faker');

const user = {
  id: faker.database.mongodbObjectId(),
  firstName: 'Vaniko',
  lastName: 'Akopashvili',
  token: 'secret_token',
};

async function getUser(req, res) {
  res.status(200).send(transformSuccess(user));
}

module.exports = {
  getUser,
};
