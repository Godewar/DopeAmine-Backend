// const newOrder = require("../Model/newordermodel");

// //                     post       /api/newmyorder/generate           ............
// const generate = async (req, res) => {
//   try {
//     const {
//       product_name,
//       category,
//       size,
//       description,
//       quantity,
//     //   final_total,
//       image,
//     //   location,
//       city,
//       state,
//       pincode
     
//     } = req.body;

//     // Create a new job cart object
//     const newmyorderData = new neworder({
//       product_name,
//       category,
//       size,
//       description,
//       quantity,
//     //   final_total,
//       image,
//     //   location,
//       city,
//       state,
//       pincode
//     });

//     // Save the new job cart to the database
//     const savemyorder = await neworderData.save();

//     return res.status(200).send(savemyorder);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// };

// module.exports = {
//   generate,
  
// };

// controllers/orderController.js
const newOrder = require("../Model/newordermodel");

// const generate = async (req, res) => {
//   try {
//     const {
//       product_name,
//       category,
//       size,
//       description,
//       quantity,
//       image,
//       city,
//       state,
//       pincode,
//     } = req.body;

//     // Create a new order object
//     const newOrderData = new newOrder({
//       product_name,
//       category,
//       size,
//       description,
//       quantity,
//       image,
//       city,
//       state,
//       pincode,
//     });

//     // Save the new order to the database
//     const savedOrder = await newOrderData.save();

//     return res.status(200).send(savedOrder);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// };

// const generate = async (req, res) => {
//   try {
//     // Extract all fields from req.body dynamically
//     const orderData = { ...req.body };
 
//     // Create a new order object
//     const newOrderData  = new newOrder(orderData);
//     // Save the new order to the database
//     const savedOrder = await newOrderData.save();
//     return res.status(200).send(savedOrder);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// };


const generate = async (req, res) => {
  try {
    // Extract all fields from req.body dynamically
    const { product_data } = req.body;
 
    // Create a new order object with product_data array
    const newOrderData = new newOrder({ product_data });
    // Save the new order to the database
    const savedOrder = await newOrderData.save();
    return res.status(200).send(savedOrder);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getallnewmyorder = async (req, res) => {
  try {
    const customers = await newOrder.find({});

    res.json(customers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to retrieve getallnewmyorder data" });
  }
};

module.exports = {
  generate,
  getallnewmyorder
};
