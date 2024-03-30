const express = require("express");
const {
  generate,getallnewmyorder
} = require("../Controller/newmyordercontroller");
const router = express.Router();

// router.route("/generate").post(generate);
router.route("/neworder").post(generate);
router.route("/allneworder").get(getallnewmyorder);
// router.route("/:id").get(customerbyid);

module.exports = router;
