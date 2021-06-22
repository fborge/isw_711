const Product = require('../models/productModel.js'); 
const Client = require('../models/clientModel.js'); 
const Order = require('../models/orderModel.js'); 

// Products actions

function products() { 
  return Product.find({});
}

function product(args) {
  return Product.findById(args.id)
}

function addProduct(args) {
  let product = new Product(args.productInput);
  return product.save();
}

function updateProduct(args) {
    return Product.findByIdAndUpdate(args.id, args.productInput, { new: true }); 
  }

// Client actions
function clients() { 
    return Client.find({});
  }
  
  function client(args) {
    return Client.findById(args.id)
  }
  
  function addClient(args) {
    let client = new Client(args.clientInput);
    return client.save();
  }
  function updateClient(args) {
    return Client.findByIdAndUpdate(args.id, args.clientInput, { new: true }); 
  }

  function addOrder(args) {
    let order = new Order(args.orderInput);
    return order.save();
  }


module.exports = { 
    products, 
    product, 
    addProduct,
    updateProduct,
    clients,
    client,
    addClient,
    updateClient,
    addOrder
 }