const mongoose = require("mongoose");

module.exports = {
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: String,
  address: {
    street: String,
    city: String,
    province: String,
    postalCode: String,
    streetExtra: String,
  },
};
