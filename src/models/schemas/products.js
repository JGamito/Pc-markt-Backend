const mongoose = require("mongoose");

module.exports = {
  title: String,
  description: String,
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  priceMax: String,
  priceMin: String,
  color: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  removedAt: { type: Date, default: Date.now },
};
