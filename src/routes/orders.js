const router = require("express").Router();
const ServiceOrder = require("../services/ordersService");
const { validateCreateOrders } = require("./validations/orders");

router.post("/", validateCreateOrders, async (req, res, next) => {
  try {
    const document = req.body;
    const { userId } = req;
    await ServiceOrder.create({ ...document, user: userId });
    res.status(201).json();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
