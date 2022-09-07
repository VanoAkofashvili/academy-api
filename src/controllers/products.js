const faker = require("@faker-js/faker");
const { transformSuccess } = require("../../utils");

async function getAll(req, res) {
  const products = new Array(20).fill(null).map((_) => {
    return {
      name: faker.faker.commerce.productName(),
      price: faker.faker.commerce.price(),
      id: faker.faker.database.mongodbObjectId(),
    };
  });

  res.status(200).send(transformSuccess(products));
}

async function getOne(req, res) {}

module.exports = {
  getAll,
};
