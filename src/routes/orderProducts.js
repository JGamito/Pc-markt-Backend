const router = require("express").Router();
const { quantity } = require("../models/schemas/orderProducts");
const ServiceOrderProduct = require("../services/orderProductsService");
const { validateCreateOrderProducts } = require("./validations/orderProducts");

router.post(
  "/",
  /*validateCreateOrderProducts,*/ async (req, res, next) => {
    try {
      const document = req.body;
      await ServiceOrderProduct.create({ ...document });
      res.status(201).json();
    } catch (err) {
      next(err);
    }
  }
);
module.exports = router;
