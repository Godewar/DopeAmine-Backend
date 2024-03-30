
const Admin = require("../Model/AdminModel");

//////                           post   /api/customer/login            ............

  const userlogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find a user with the provided email and password
      const user = await Admin.findOne({ email, password });
  
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

  const CreateUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      res.status(400).json({ error: "Please fill in all the fields" });
      return;
    }
  
    try {
      const User = new Admin({
        name,
        email,
        password,
      });
  
      const createdUser = await User.save();
  
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(500).json({ error: "Error creating customer" });
    }
  };

  module.exports = {
    userlogin,
    CreateUser 
  }