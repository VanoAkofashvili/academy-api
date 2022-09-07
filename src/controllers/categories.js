const { transformSuccess } = require("../utils");
const { categories } = require("../database/products-list");
const { BadRequestError } = require("../errors");

async function getCategories(req, res) {
  res.status(200).send(transformSuccess(categories));
}

// async function getOne(req, res) {
//   const { id } = req.params;
//
//   const product = all.find((product) => product.id === id);
//
//   if (product) {
//     return res.status(200).send(transformSuccess(product));
//   }
//
//   throw new BadRequestError("Product not found");
// }

module.exports = {
  getCategories,
};
