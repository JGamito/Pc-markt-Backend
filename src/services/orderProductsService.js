const { OrderProduct } = require("../models/mongoose");
const orders = require("../models/schemas/orders");
const errors = require("./errors");

const create = async (document) => {
  try {
    await errors.throwErrorIfRelatedDoesNotExist({ id, model: OrderProduct });
    const orderProducts = await new OrderProduct(document).save();
    await OrderProduct.findByIdAndUpdate(orderProducts.idPanel, {
      $push: { orderProducts: orderProducts._id },
    });
    return orderProducts;
  } catch (err) {
    throw err;
  }
};

const readAll = async () => {
  return await OrderProduct.find();
};

const update = async (id, document) => {
  const orderProducts = await OrderProduct.findById(id);
  OrderProduct.set({
    ...orderProducts.toObject(),
    ...document,
    updatedAt: Date.now(),
  });
  await orderProducts.save();
  return orderProducts;
};

const remove = async (id) => {
  const result = await OrderProduct.findByIdAndDelete(id);
  return result !== null;
};

module.exports = {
  create,
  readAll,
  update,
  remove,
};
