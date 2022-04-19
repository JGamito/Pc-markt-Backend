const router = require("express").Router();

const ProductsService = require("./../services/ProductsService");

router.get("/", async (req, res, next) => {
  const products = await ProductsService.readAll();
  res.json({ products });
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await ProductsService.read(id);
    res.json(todo);
  } catch (err) {
    next(err);
  }
});
router.get("/category/:categoryId", async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const todo = await ProductsService.findByCategoryId(categoryId);
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
