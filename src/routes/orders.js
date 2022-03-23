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

router.put('/:id', validateUpdateOrder, async (req, res, next) => {
  try {
    const document = req.body;
    const { id } = req.params;
    await ServiceOrder.update(id, document);
    res.status(201).json();
  } catch (err) {
    next(err);
  }
});
router.put("/:id/checkout", async (req, res, next) => {
  const { id } = req.params;
  await ServiceOrder.checkOut(id);
  res.status(204).json();
});

module.exports = router;
