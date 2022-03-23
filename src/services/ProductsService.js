const { Product } = require("./../models/mongoose");
const checker = require("../services/errors");
const products = require("../models/schemas/products");

const readAll = async () => {
  return await Product.find();
};

const read = async (id) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: Todo });
  return await Product.findById(id);
};

module.exports = {
  readAll,
  read
};
