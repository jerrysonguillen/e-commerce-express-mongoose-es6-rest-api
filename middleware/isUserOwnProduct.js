import { productModel } from "./../module/products/product.model";

function userOwnProduct(req, res, next) {
    console.log('smpleto')
    const productId = req.params.productId;
    const products = productModel.findById(productId);
    console.log('this is product id',productId)
    //console.log(productId)
    //const userProduct = productController.userProduct(productId,{});
    //console.log(userProduct>0)

}

export default userOwnProduct;
