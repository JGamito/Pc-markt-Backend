const { Brand } = require("./../models/mongoose");

const readAll = async () => {
  return await Brand.find();
};
module.exports = { readAll };
