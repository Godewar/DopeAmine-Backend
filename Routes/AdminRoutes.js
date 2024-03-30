const express = require("express");  
const { CreateUser, userlogin } = require("../Controller/Admincontroller");
   


const router = express.Router(); 
router.route("/loginAdmin").post(userlogin);
router.route("/registerAdmin").post(CreateUser);

module.exports = router;