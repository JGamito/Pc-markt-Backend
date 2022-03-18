
const {Product} = requiere('./../models/mongoose');
const checker = require('../services/errors');


const readAll = async () => {
    return await Product.find();
  };


  module.exports = {
      readAll,
  }