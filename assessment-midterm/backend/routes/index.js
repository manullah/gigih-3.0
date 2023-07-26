const express = require("express");
const router = express.Router();

const videos = require("./video");
const product = require("./product");

router.use("/videos", videos);
router.use("/products", product);

module.exports = router;
