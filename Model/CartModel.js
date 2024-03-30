const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
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
    
})

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;