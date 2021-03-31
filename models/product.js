const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ImageSchema = new Schema({
    name:String,
    img: {
        data: Buffer, 
        contentType: String 
    }
});

const ProductSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
    },
    price: {
        type: Number, 
        required: true
    },
    category: {
        type: String,
        required: true
    },
    
    image: [ImageSchema],

    tags: {
        type: Array
    }
});

module.exports = mongoose.model('Product', ProductSchema);