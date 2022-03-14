require("dotenv").config();
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
const DATABASE = process.env.DATABASE;

mongoose.connect(`${DB_URL}/${DATABASE}`);

const brandsSchema = require("./schemas/brands");

const Brand = mongoose.model("Brand", brandsSchema);

module.exports = {
  Brand,
};
