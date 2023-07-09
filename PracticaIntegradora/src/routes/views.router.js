import { Router } from "express";
import Products from '../dao/dbManagers/products.js'

const productsManager = new Products()
const router = Router()

router.get('/',async(req,res)=>{
    let products= await productsManager.getAll();
    console.log(products)
    res.render('products',{products})
})

router.get('/carts',async(req,res)=>{
    //let carts = await courseManager.getAll();
    //console.log(carts)
    //res.render('carts',{carts})
})

export default router;