const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      // required: true,
    },
    myOrders: [
      {
        product_name: {
          type: String,
          required: false,
        },
        
        status: {
          type: String,
          required: false,
        },
        Description: {
          type: String,
          required: false,
        },
        total: {
          type: Number,
          required: false,
        },
        final_total: {
          type: Number,
          required: false,
        },
        image: {
          type: String,
          required: false,
        },
        location: {
          type: String,
          required: false,
        },
        city: {
          type: String,
          required: false,
        },
        state: {
          type: String,
          required: false,
        },
        pincode: {
          type: Number,
          required: false,
        }
      }
    ],
    mycart:[{
      product_name: {
        type: String,
        required: false,
      },
      total: {
        type: Number,
        required: false,
      },
      Description: {
        type: String,
        required: false,
      },
      image: {
        type: String,
        required: false,
      },
      final_total: {
        type: Number,
        required: false,
      },
      price : {
        type:Number,
        required:false
      },
      
          
    }
  ]


  },
  {
    // timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
