require('dotenv').config();
const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;
const DATABASE = process.env.DATABASE;

mongoose.connect(`${DB_URL}/${DATABASE}`);

const productsSchemas = require('./schemas/products');
const Product = mongoose.model('Products', productsSchemas);

module.exports = {
Product,
}