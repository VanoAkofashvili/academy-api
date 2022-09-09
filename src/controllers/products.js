const { transformSuccess } = require("../utils");
const {
  data: { all },
  withCategories,
} = require("../database/products-list");
const { BadRequestError } = require("../errors");

async function getAll(req, res) {
  const products = all.map(({ id, title, price, img, brand }) => ({
    id,
    title,
    price,
    img,
    brand,
  }));

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

async function search(req, res) {
  const { query } = req.body;

  const found = all.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).send(transformSuccess(found || []));
}

async function getByCategory(req, res) {
  const { id } = req.params;
  const products = withCategories[id];
  if (!(id && products)) {
    throw new BadRequestError("Invalid category id");
  }

  res.status(200).send(transformSuccess(products));
}

module.exports = {
  getAll,
  getOne,
  search,
  getByCategory,
};
