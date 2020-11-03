import express from "express";
import productController from "./product.controller";
import { asyncWrapper } from "../../utils/asyncWrapper";
import authenticateToken from "../../middleware/auth";
import isAdmin from "../../middleware/isAdmin";
import userOwnProduct from "../../middleware/isUserOwnProduct";

const productRoutes = express.Router();

productRoutes.get("/", function(req, res, next) {
  res.json({ message: "from product" });
});

// add product
productRoutes.post("/",[authenticateToken], asyncWrapper(productController.add));

//find all product
productRoutes.get("/all",[authenticateToken],asyncWrapper(productController.findAll));

//get user product
productRoutes.get("/:userId",[authenticateToken],asyncWrapper(productController.userProduct));

//update product
productRoutes.put("/:productId",[authenticateToken],asyncWrapper(productController.update));

//delete product
productRoutes.delete("/:productId",[authenticateToken],asyncWrapper(productController.delete));

export { productRoutes };
