var mongoose = require("mongoose");

const newOrderSchema = new mongoose.Schema(
  {
    // product_name: {
    //   type: String,
    // },
    // category: {
    //     type: String,
    //   },
    // size: {
    //   type: String,
    // },
    // description: {
    //   type: String,
    // },
    // quantity: {
    //   type: Number,
    // },
    // image: {
    //   type: String,
    // },
    // city: {
    //     type: String,
    // },
    // state: {
    //     type: String,

    // },
    // pincode: {
    //     type: Number
    // },
    product_data: {
      type: Array, 
    },


  },
  { timestamps: true }
);

module.exports = mongoose.model("newOrder", newOrderSchema);
