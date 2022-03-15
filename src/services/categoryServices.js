const {category} =require('./../routes/models/mongoose')

const readAll = async () => {
    return await category.find();
}


module.exports={
    readAll
}