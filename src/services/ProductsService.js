const {Product} = requiere('./../models/mongoose');


const readAll = async () => {
    return await Product.find();
  }


  module.exports = {
      readAll,
  }