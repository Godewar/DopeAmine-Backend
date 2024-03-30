const express = require('express');
const app = express();
app.use(express.json());
const connectDB = require('./db');
connectDB();
// const routes = require('./Routes/DemoproductRoutes');
const cors = require("cors");
app.use(cors()) 

const PORT = 5050

// Connect to MongoDB

// Middleware

// Routes//
 const route = require("./Routes/DemoproductRoutes");
 app.use("/api/Demoproduct", route);

 // Customer //
 const customer = require("./Routes/CustomerRoute");
 app.use("/api/customer", customer);

 //////////Order ///////
const order = require("./Routes/newMyOrderRoute");
app.use("/api/order", order);

  /////////Admin/////////
const Admin = require("./Routes/AdminRoutes");
app.use("/api/admin", Admin);
  


app.get('/', (req, res) => {
    res.send('Welcome to my server!');
   });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

