const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const Brands = require("./src/routes/brands");

app.use(express.json());


app.use("/brands", Brands);

app.get('/',(req, res, next)=>{
    res.json({message:'Its working'})
})


app.listen(port, '', ()=>{
console.log(`App running on port: ${port}`)
})

