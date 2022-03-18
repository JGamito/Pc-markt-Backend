const router = require ('express').Router();
const { checkErrors } = require('../services/errors');
const ProductsService = require('./../services/ProductService');


router.get('/', async (req, res, next)=>{
        const products = await ProductsService.readAll();
        res.json({products})  
    
});


module.exports = router;