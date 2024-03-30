const Product = require('../Model/Demoproductmodel');



/////////////////////////////////////  post   /api/products/newproduct  ...............................................
// const addproduct = async (req, res) => {
//     try {
//       const addProduct = new Product({
//         productName: req.body.productName,
//         category: req.body.category,
//         price: req.body.price,
//       });
  
//       const savedProduct = await addProduct.save();
//       return res.status(201).json(savedProduct);
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   };
/////////////////////////////////////  post   /api/products/newproduct  ...............................................
const newproduct = async (req, res) => {
  try {
    const newProduct = new Product({
      product_name: req.body.product_name,
      color: req.body.color,
      size: req.body.size,
      description: req.body.description,
      quantity: req.body.quantity,
      image: req.body.image,
      price: req.body.price,
    });

    const savedProduct = await newProduct.save();
    return res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a specific product by ID
//////                         get     /api/product/:id            ............
const productbyid = async (req, res) => {

  const productId = req.params.id;
  try {
    const singleProduct = await Product.findById(productId);
    res.json(singleProduct);
  } catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).json({ message: "Failed to fetch Product data" });
  }
};


const AllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching product data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//////////////// put / update product by id
const updateProductById = async (req, res) => {
  const updateFields = req.body;

  const products = await Product.findById(req.params.id);

  if (!products) {
    return res.status(404).json({ message: "Products not found" });
  }

  // Update Products's properties
  for (const key in updateFields) {
    if (Object.hasOwnProperty.call(updateFields, key)) {
      products[key] = updateFields[key];
    }
  }

  const updatedProduct = await products.save();
  res.json(updatedProduct);
};

/////////////////   delete product by id    --------------
const deleteProductbyid = async (req, res) => {
  try {
    const DeleteProduct = await Product.findById(req.params.id);

    if (!DeleteProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    await DeleteProduct.deleteOne();

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}


module.exports = {
  AllProducts,
  newproduct,
  productbyid,
  updateProductById,
  deleteProductbyid
};
