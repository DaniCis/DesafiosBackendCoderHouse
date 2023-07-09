import { Router } from "express";
import Products from "../dao/dbManagers/products.js";

const router = Router()
const ProductManager = new Products()

router.get('/', async (req, res)=>{
    try{
        let products = await ProductManager.getAll()
        res.send({ status:"success", payload: products})
    }catch(e){
        res.status(400).send({status:"Error", error: `Failed to load products. ${e.message}`})
    }
}) 

router.post('/', async(req,res)=>{
    try{
        const {title,description,code,price,status,stock,category,thumbnails} = req.body
        let newProduct ={
            title,description,code,price,status,stock,category,thumbnails
        }
        const result = await ProductManager.addProduct(newProduct)
        res.send({ status:"success", payload: result})
    }catch(e){
        res.status(400).send({status:"Error", error: `Failed to load products. ${e.message}`})
    }
})

export default router