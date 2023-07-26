const express = require("express");

const router = express.Router();
const VideoModel = require("../models/video");
const ProductModel = require("../models/product");

router.post("/", async (req, res) => {
  const video = new VideoModel({
    urlThumbnail: req.body.urlThumbnail,
  });

  try {
    console.log(`Creating video ${req.body.urlThumbnail}...`);
    const result = await video.save();

    res.status(201).json({
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log(`Getting all videos...`);
    const allVideos = await VideoModel.find().populate("relatedProducts");

    res.status(200).json({
      data: allVideos,
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

    console.log(`Finding video ${id}...`);
    const result = await VideoModel.findById(id);

    res.status(200).json({ data: result });
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

    const result = await VideoModel.findByIdAndUpdate(id, payload, option);

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

    console.log(`Deleting video ${id}...`);
    const result = await VideoModel.findByIdAndDelete(id);

    res.status(200).json({ message: `${result._id} has been deleted` });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

module.exports = router;
