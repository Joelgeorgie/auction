const express = require("express");
const { getAllProducts, handleProductAdd } = require("../controllers/product");

const router = express.Router();

router.post("/add", handleProductAdd);
router.get("/allprods", getAllProducts);

module.exports = router;