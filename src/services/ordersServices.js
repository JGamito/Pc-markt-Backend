const {Orders} =require('../models/mongoose')

const readAll = async () => {
    return await Orders.find();
}
const read = async (id) => {
    return await Orders.findById(id);
  }
  
  const update = async (id, document) => {
    const order = await Orders.findById(id);
    Orders.set({ ...order.toObject(), ...document, updatedAt: Date.now() });
    await order.save();
    return order;
  }
  
  const remove = async (id) => {
    const result = await Orders.findByIdAndDelete(id);
    return result !== null;
  }
  
  module.exports = {
    create,
    readAll,
    read,
    update,
    remove
  }

