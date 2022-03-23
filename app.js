const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const product = require("./src/routes/products");
const categories = require("./src/routes/categories");
const brands = require("./src/routes/brands");
const orderProducts = require("./src/routes/orderProducts");

const login = require('./src/routes/Auth')

const orders = require("./src/routes/orders");


const users = require("./src/routes/users");
app.use(express.json());

app.get("/", (req, res, next) => {
  res.json({ message: "Its working" });
});

app.use("/categories", categories);
app.use("/brands", brands);
app.use("/products", product);
app.use("/orderProducts", orderProducts);
app.use("/orders", orders);
app.use("/users", users);
app.use("/login", login)

app.listen(port, "", () => {
  console.log(`App running on port: ${port}`);
});
