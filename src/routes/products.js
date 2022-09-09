const express = require("express");
const {
  getAll,
  getOne,
  search,
  getByCategory,
} = require("../controllers/products");

const router = express.Router();

router.post("/search", search);
router.get("/", getAll);
router.get("/category/:id", getByCategory);
router.get("/:id", getOne);

module.exports = router;
