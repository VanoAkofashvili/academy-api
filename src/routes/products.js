const express = require("express");
const { getAll, getOne, search } = require("../controllers/products");

const router = express.Router();

router.post("/search", search);
router.get("/", getAll);
router.get("/:id", getOne);
module.exports = router;
