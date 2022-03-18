module.exports = {
  name: String,
  surname: String,
  email: String,
  password: String,
  address: {
    street: String,
    city: String,
    province: String,
    postalCode: String,
    streetExtra: String,
  },
  phone: Number,
  status: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
};
