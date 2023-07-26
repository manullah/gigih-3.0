const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  linkProduct: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  // videoId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Videos",
  // },
});

module.exports = mongoose.model("Product", productSchema);
