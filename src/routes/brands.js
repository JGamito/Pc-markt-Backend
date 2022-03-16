const router = require("express").Router();
const ServiceBrand = require("./../services/BrandService");

router.get("/", async (req, res, next) => {
  try {
    const Brands = await ServiceBrand.readAll();
    res.json(Brands);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
