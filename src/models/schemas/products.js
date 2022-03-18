const mongoose = require('mongoose');

module.exports = {
    title: String,
    description: String,
    brandId: {
        type:mongoose.Schema.Types.ObjetId,
        ref: 'Brand',
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjetId,
        ref: 'Category',
    },
    priceMax: Number,
    priceMin: Number,
    color: String,  
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    removedAt: {type: Date, default: Date.now},
    }

