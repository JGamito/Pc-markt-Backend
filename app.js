const express = require('express');
const app = express()
const port = process.env.PORT || 8000;
const Product = require('./src/routes/products');

app.use(express.json());

app.use(' /products', Product);

app.listen(port, '', ()=>{
console.log(`App running on port: ${port}`)
})
