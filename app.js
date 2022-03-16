const express = require('express');
const app = express()
const port = process.env.PORT || 8000;
const Product = require('./src/routes/products');
const categories = require("./src/routes/categories");
const brands = require("./src/routes/brands");

app.use(express.json());

app.get('/',(req, res, next)=>{
    res.json({message:'Its working'})
})

app.use("/categories", categories);
app.use("/brands", brands);
app.use(' /products', Product);

app.listen(port, "", () => {
  console.log(`App running on port: ${port}`);
});
