import productService from '../services/products.service.js'
import { STATUS } from '../utils/constantes.js'

class ProductController{
    getProducts =async(req,res)=>{
        try{
            const result = await productService.getProducts()
            res.status(201).json({products: result, status:STATUS.SUCCESS})
        }catch(e){
            res.status(400).json({ error:e.message, status:STATUS.FAIL})
        }
    }

    getProductById=async(req,res)=>{
        try{
            const{id} = req.body
            const result = await productService.getProductById(id)
            res.status(201).json({product: result, status:STATUS.SUCCESS})
        }catch(e){
            res.status(400).json({ error:e.message, status:STATUS.FAIL})
        }
    }
}
export default new ProductController()