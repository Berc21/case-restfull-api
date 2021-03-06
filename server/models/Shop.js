const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    name: String,
    date: String,
    category: String,
    image: String,
    description: String
});

module.exports = mongoose.model('Shop', ShopSchema);