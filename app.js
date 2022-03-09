const express = require('express');
const app = express()
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/',(req, res, next)=>{
    res.json({message:'Its working'})
})


app.listen(port, '', ()=>{
console.log(`App running on port: ${port}`)
})