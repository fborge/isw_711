const mongoose=require('mongoose')
const Product = require('../models/productModel.js'); 
const Client = require('../models/clientModel.js'); 


const Schema = mongoose.Schema;

const order = new Schema({

    client:{type: Schema.ObjectId, ref: Client},
    products:[{ type: Schema.ObjectId, ref: Product }]
})

module.exports = mongoose.model('orders', order);