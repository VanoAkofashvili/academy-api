const { transformSuccess } = require("../utils");
const {
  data: { all },
} = require("../database/products-list");
const { BadRequestError } = require("../errors");

async function getAll(req, res) {
  const products = all;

  res.status(200).send(transformSuccess(products));
}

async function getOne(req, res) {
  const { id } = req.params;

  const product = all.find((product) => product.id === id);

  if (product) {
    return res.status(200).send(transformSuccess(product));
  }

  throw new BadRequestError("Product not found");
}

module.exports = {
  getAll,
  getOne,
};
