const express = require('express');
const router = express.Router();
// const Customercontroller = require('../Controller/Customercontroller');
const { CreateCustomer, login, myorder, addCart, deleteCart, customerbyid, deletecustomerbyid, allcustomers } = require("../Controller/Customercontroller");
// const mongoose = require('mongoose');

// Route to get all products 
router.get('/allcustomer',allcustomers); 
 router.post("/register",CreateCustomer);
 router.post("/login",login);
 router.put("/myorder/:_id",myorder);
 router.put("/cart/:_id",addCart);
 router.delete("/:_id/cart/:c_id",deleteCart);
 router.get("/:id",customerbyid);
 router.delete("/:id",deletecustomerbyid)
module.exports = router;
