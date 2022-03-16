const {Category} =require('../models/mongoose')

const readAll = async () => {
    return await Category.find();
}


module.exports={
    readAll
}