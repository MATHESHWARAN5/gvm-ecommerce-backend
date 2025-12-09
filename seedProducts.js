require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

const products = [
  {
    name: "GVM T-Shirt",
    description: "Comfortable cotton T-shirt",
    price: 499,
    image: "https://example.com/tshirt.jpg",
    category: "Clothing"
  },
  {
    name: "GVM Hoodie",
    description: "Warm and cozy hoodie",
    price: 1299,
    image: "https://example.com/hoodie.jpg",
    category: "Clothing"
  },
  {
    name: "GVM Mug",
    description: "Ceramic mug for coffee lovers",
    price: 299,
    image: "https://example.com/mug.jpg",
    category: "Accessories"
  }
];

// Insert products into DB
const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Clears existing products (optional)
    await Product.insertMany(products);
    console.log("Sample products inserted successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedProducts();
