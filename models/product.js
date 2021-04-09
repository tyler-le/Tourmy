const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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
    
    image: String,

    video: String,

    tags: {
        type: Array
    }
});

module.exports = mongoose.model('Product', ProductSchema);