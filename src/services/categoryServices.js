const {category} =require('./../routes/models/mongoose')

const readAll = async () => {
    return await category.find().populate('lists').exec();
}