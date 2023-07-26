const express = require("express");

const router = express.Router();
const ProductModel = require("../models/product");

router.post("/", async (req, res) => {
  const product = new ProductModel({
    linkProduct: req.body.linkProduct,
    title: req.body.title,
    price: req.body.price,
    videoId: req.body.videoId,
  });

  try {
    console.log(`Creating product ${req.body.title}...`);
    const productToSave = await product.save();

    res.status(201).json(productToSave);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log(`Getting all products...`);
    const allProducts = await ProductModel.find();

    res.status(200).json({
      data: allProducts,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    console.log(`Finding product ${id}...`);
    const result = await ProductModel.find({ _id: id });

    if (result.length === 0) {
      res.status(400).json({ data: null });
      return;
    }

    res.status(200).json({ data: result[0] });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const option = { new: true };

    const result = await ProductModel.findByIdAndUpdate(id, payload, option);

    res.status(200).json({ data: result });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    console.log(`Deleting product ${id}...`);
    const result = await ProductModel.findByIdAndDelete(id);

    res.status(200).json({ message: `${result._id} has been deleted` });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

module.exports = router;
