const { Orders } = require("../models/mongoose");
const orders = require("../models/schemas/orders");
const errors = require("./errors");

const create = async (document) => {
  try {
    await errors.throwErrorIfRelatedDoesNotExist({ id, model: Orders });
    const order = await new Orders(document).save();
    await Orders.findByIdAndUpdate(orders.idPanel, {
      $push: { order: order._id },
    });
    return order;
  } catch (err) {
    throw err;
  }
};

const readAll = async () => {
  return await Orders.find();
};
const read = async (id) => {
  return await Orders.findById(id);
};

const update = async (id, document) => {
  const order = await Orders.findById(id);
  Orders.set({ ...order.toObject(), ...document, updatedAt: Date.now() });
  await order.save();
  return order;
};

const remove = async (id) => {
  const result = await Orders.findByIdAndDelete(id);
  return result !== null;
};

module.exports = {
  create,
  readAll,
  read,
  update,
  remove,
};
