import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { productModel } from "./product.model";
import httpStatus from "../../utils/httpStatus";
import appConfig from "../../config/env";

const productController = {};

// Add Product
productController.add = async (req, res, next) => {
  
  const { productId, name, detail, category, price, qty } = req.body;

  try {
    const product = await productModel.create({
      name ,
      detail,
      category,
      price,
      qty,
      userId:req.user.userId
    });
    await product.save();
    return res.json(product);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.toString() });
  }
};

//get all product
productController.findAll = async (req,res) => {
  try {
    console.log(req)
    let products = await productModel.find();
    return res.json(products);
  } catch (error) {
    return res
      .status()
      .json({ error: error.toString() });
  }
}

//get user product
productController.userProduct = async (req,res) => {
  try {
    const userid = req.params.userId;
    const products = productModel.find();
    const userProducts = products.filter(product=>product.userId==userid);
    return res.json(userProducts);

  } catch (error) {
    return res
      .status()
      .json({ error: error.toString() });
  }
}

//update product
productController.update = async (req, res) => {
  try {
    let product = await productModel.findById(req.params.productId);
    if(!product) {
      return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Product not found" });
    }
    Object.assign(product, req.body);
    await product.save();
    return res.json(product);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.toString() });
  }
}

//Delete product
productController.delete = async (req,res) => {
  try{
    const product = await productModel.findByIdAndRemove(req.params.productId);
    if(!product){
      return res.status(httpStatus.BAD_REQUEST)
      .json({message: "Item not found"})
    }
    return res.json({ message: "Item deleted successfully!" });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.toString() });
  }
};


export default productController;
