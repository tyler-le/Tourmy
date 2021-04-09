const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Products = require("./product")


const CartSchema = new Schema({
    product: {
        type: Object
    }
});

module.exports = mongoose.model('Cart', CartSchema);