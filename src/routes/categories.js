const router = require('express').Router()
const SeviceCategory = require ('./../services/categoryServices.js')


router.get('/',async(req, res, next)=>{
   
        const categories = await SeviceCategory.readAll();
        res.json(categories);
}) 





module.exports= router;