const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;
const DATABASE= process.env.DATABASE;

mongoose.connect(`${DB_URL}/${DATABASE}`)

const categorySchema =('./schemas/categories.js');
const category = mongoose.model('categories', categorySchema);


module.exports = {
    category,
}