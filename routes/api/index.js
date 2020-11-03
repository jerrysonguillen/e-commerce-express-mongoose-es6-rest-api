import express from "express";
import { crudRoutes } from "../../module/crud/crud.routes";
import { productRoutes } from "../../module/products/product.routes";

const apiRoutes = express.Router();

apiRoutes.get("/", function(req, res, next) {
  res.json({ message: "Hello world" });
});

apiRoutes.use("/auth", crudRoutes);
apiRoutes.use("/product", productRoutes);

export default apiRoutes;
