const express = require("express");
const router = express.Router();
const createProduct = require("../controllers/product.js")

router.post('/create-product', createProduct);

module.exports= router;