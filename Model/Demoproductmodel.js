const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // productName: String,
  // category: String,
  // price: Number,
  // Add more fields as needed
  product_name: {
        type: String
      },
      image: {
             type:String,
           },
      description: {
        type:String 
      },
       size:{
        type: String
       },
        color:{
          type:String
        },
      price: {
        type:Number
      },
      quantity: {
        type:Number 
      },
    },
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
