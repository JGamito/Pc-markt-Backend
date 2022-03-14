const router = require('express').Router()
const SeviceCategory = require ('./../services/categoryServices.js')


router.get('/',async(req, res, next)=>{
    try {
        const categories = await SeviceCategory.readAll();
        res.json(categories);
      } catch (err) {
        next(err);
      }

    res.json()
}) 





module.exports= router;