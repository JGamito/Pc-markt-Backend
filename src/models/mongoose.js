const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;
const DATABASE = process.env.DATABASE;

mongoose.connect(`${DB_URL}/${DATABASE}`);

const categorySchema = require("./schemas/categories.js");
const Category = mongoose.model("categories", categorySchema);

const brandsSchema = require("./schemas/brands");
const Brand = mongoose.model("Brand", brandsSchema);

const productsSchemas = require("./schemas/products");
const Product = mongoose.model("Products", productsSchemas);

const userSchema = require("./schemas/users");
const User = mongoose.model("User", userSchema);

const loginUserSchema = require("./schemas/login");
const Login = mongoose.model("login", loginUserSchema);

const ordersSchema = require("./schemas/orders");
const Orders = mongoose.model("orders", ordersSchema);

const orderProductsSchema = require("./schemas/orderProducts");
const OrderProduct = mongoose.model("orderProducts", orderProductsSchema);

module.exports = {
  Brand,
  Category,
  Product,
  User,
  Orders,
  OrderProduct,
  Login,
};
