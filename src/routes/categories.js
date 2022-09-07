const express = require("express");
const { getCategories } = require("../controllers/categories");

const router = express.Router();

router.get("/", getCategories);

module.exports = router;
