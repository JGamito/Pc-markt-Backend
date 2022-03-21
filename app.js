const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const Product = require("./src/routes/products");
const categories = require("./src/routes/categories");
const brands = require("./src/routes/brands");
const orderProducts = require("./src/routes/orderProducts");

const users = require("./src/routes/users");
app.use(express.json());

app.get("/", (req, res, next) => {
  res.json({ message: "Its working" });
});

app.use("/categories", categories);
app.use("/brands", brands);
app.use("/products", Product);
app.use("/orderProducts", orderProducts);
app.use("/users", users);

app.listen(port, "", () => {
  console.log(`App running on port: ${port}`);
});
