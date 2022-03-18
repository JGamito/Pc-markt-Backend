
const {Product} = requiere('./../models/mongoose');
const {checkErrors} = require('../services/errors');


const readAll = async () => {
    return await Product.find();
  };


  module.exports = {
      readAll,
  }