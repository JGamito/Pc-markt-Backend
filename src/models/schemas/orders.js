const mongoose = require('mongoose');

module.exports = {
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
        },
    status:String
    
}

