
const Customer = require("../Model/CustomerModel");






const CreateCustomer = async (req, res) => {
 const { name, email, password } = req.body;

 if (!name || !email || !password) {
   res.status(400).json({ error: "Please fill in all the fields" });
   return;
 }

 try {
   const customer = new Customer({
     name,
     email,
     password,
   });

   const createdCustomer = await customer.save();

   res.status(201).json(createdCustomer);
 } catch (error) {
   res.status(500).json({ error: "Error creating customer" });
 }
};

  //////                           post   /api/customer/login            ............

  const login = async (req, res) => {
   try {
     const { email, password } = req.body;
 
     // Find a user with the provided email and password
     const user = await Customer.findOne({ email, password });
 
     if (user) {
       // Return a success message or token to the client
       return res.json({
         message: "Login successful.......",
         _id: user._id,
         name: user.name,
         email: user.email,
         password: user.password,
       });
     }
 
     // Return an error message if the user is not found
     return res.status(401).json({ error: "Invalid credentials" });
   } catch (error) {
     // Handle any server errors
     console.log(error);
     return res.status(500).json({ error: "Internal Server Error" });
   }
 };

 //////                          put    /api/customer/myorder/:_id            ............
const myorder = async (req, res) => {
 try {
   const _id = req.params._id;
   const updatedMyOrders = req.body;

   const customer = await Customer.findByIdAndUpdate(
     _id,
     { $push: { myOrders: updatedMyOrders } },
     { new: true }
   );

   if (!customer) {
     return res.status(404).json({ error: "Customer not found" });
   }

   res.status(200).json({
     message: "Customer's Product updated successfully",
     customer,
   });
 } catch (error) {
   console.log(error);
   res.status(500).json({ error: "Internal Server Error" });
 }
};

//////                          put    /api/customer/cart/:_id           >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ............
const addCart = async (req, res) => {
 try {
   const _id = req.params._id;
   const updatemycart = req.body;

   const customer = await Customer.findByIdAndUpdate(
     _id,
     { $push: { mycart: updatemycart } },
     { new: true }
   );

   if (!customer) {
     return res.status(404).json({ error: "Customer not found" });
   }

   res.status(200).json({
     message: "Customer's mycart updated successfully",
     customer,
   });
 } catch (error) {
   console.log(error);
   res.status(500).json({ error: "Internal Server Error" });
 }
};

/////                     mycart   delete    ................................................
 const mongoose = require("mongoose");
const deleteCart = async (req, res) => {
 try {
   const customerId = req.params._id; // Customer ID
   const cartId = req.params.c_id; // cart ID to be deleted

   if (
     !mongoose.Types.ObjectId.isValid(customerId) ||
     !mongoose.Types.ObjectId.isValid(cartId)
   ) {
     return res.status(400).json({ error: "Invalid customer or cart ID" });
   }

   // Find the customer by ID and update the carts array using $pull
   const customer = await Customer.findByIdAndUpdate(
     customerId,
     { $pull: { mycart: { _id: cartId } } },
     { new: true }
   );

   if (!customer) {
     return res.status(404).json({ error: "Customer not found" });
   }

   res.status(200).json({
     message: "cart removed successfully",
     customer,
   });
 } catch (error) {
   console.log(error);
   res.status(500).json({ error: "Internal Server Error" });
 }
};

//////                         get     /api/customer/:id            ............
const customerbyid = async (req, res) => {

 const customerId = req.params.id;
 try {
   const customer = await Customer.findById(customerId);
   res.json(customer);
 } catch (error) {
   console.error("Error fetching customer data:", error);
   res.status(500).json({ message: "Failed to fetch customer data" });
 }
};

/////////////////   delete customer by id    --------------
const deletecustomerbyid = async (req, res) => {
 try {
   const customer = await Customer.findById(req.params.id);

   if (!customer) {
     return res.status(404).json({ message: "Customer not found" });
   }

   await customer.deleteOne();

   return res.status(200).json({ message: "Customer deleted successfully" });
 } catch (error) {
   console.error(error);
   return res.status(500).json({ message: "Server error" });
 }
};

const allcustomers = async (req, res) => {
 try {
   const customers = await Customer.find();
   res.json(customers);
 } catch (error) {
   console.error('Error fetching product data:', error);
   res.status(500).json({ error: 'Internal Server Error' });
 }
};

module.exports = {

 CreateCustomer,
 login,
 myorder,
 addCart,
 deleteCart,
 customerbyid,
 deletecustomerbyid,
 allcustomers
}