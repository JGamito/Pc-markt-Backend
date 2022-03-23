const mongoose = require('mongoose');
const { encryptPassword } = require('./../../helpers/password');


const loginUserSchema= new mongoose.Schema({
    email: String,
    password: String,
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
})

loginUserSchema.pre('save', async function ( next){
    const user = this;
    if (user.isModified ( 'password')) {
        user.password = await encryptPassword(user.password);
    }
})

module.exports = loginUserSchema;