import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const addProduct = async (req, res) => {
  const { name, price, image, description, category } = req.body;

  const product = new Product({
    name,
    price,
    image,
    description,
    category
  });

  await product.save();
  res.json({ message: "Product Added Successfully", product });
};
