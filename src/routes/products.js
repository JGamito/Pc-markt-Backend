const router = require("express").Router();
const { checkErrors } = require("../services/errors");
const ProductsService = require("./../services/ProductsService");

router.get("/", async (req, res, next) => {
  const products = await ProductsService.readAll();
  res.json({ products });
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await ProductsService.read(id);
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
