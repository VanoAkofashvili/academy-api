const express = require("express");
const { getAll } = require("../controllers/products");

const router = express.Router();

router.get("/", getAll);

module.exports = router;
