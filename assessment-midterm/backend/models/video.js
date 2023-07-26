const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  urlThumbnail: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("Video", videoSchema);
