const mongoose = require("mongoose");

module.exports = {
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
  quantity: Number,
};
