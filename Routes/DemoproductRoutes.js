const express = require('express');
const router = express.Router();
const productController = require('../Controller/Demoproductcontroller');

// Route to get all products
router.get('/allproduct', productController.AllProducts);
router.route("/addproduct").post(productController.newproduct);
router.get('/:id',productController.productbyid);
router.put('/:id',productController.updateProductById)
router.delete('/:id',productController.deleteProductbyid)

module.exports = router;
