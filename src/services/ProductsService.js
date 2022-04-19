const { Product } = require("./../models/mongoose");
const checker = require("../services/errors");

const readAll = async () => {
  return await Product.find();
};

const read = async (id) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: Product });
  return await Product.findById(id);
};
const findByCategoryId = async (categoryId) => {
  return await Product.find({ categoryId });
};

module.exports = {
  readAll,
  read,
  findByCategoryId,
};
