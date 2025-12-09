import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("GVM Ecommerce Backend Running Successfully 🔥");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
