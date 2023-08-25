import { Router } from "express"
import productsController from "../controllers/products.controller.js";
 

class ProductRouter{
    constructor(){
        this.InicioProducto= Router();
        this.InicioProducto.get('/',productsController.getProducts)
    }
    getRouter(){
        return this.InicioProducto
    }
}
export default new ProductRouter()