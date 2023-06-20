import { Router } from "express";
import { uploader} from '../utils.js'
import ProductManager from '../managers/ProductManager.js'

const router = Router()
const manager = new ProductManager('../data/productos.json')

router.get('/',async(req,res)=>{
    let {limit} = req.query
    try {
        const products = await manager.getProducts()
        if(limit){
            const limited = products.slice(0,limit)
            res.render('index',{
                style:'index.css',
                limited
            })
        }else{
            res.render('index',{
                style:'index.css',
                products  
            })
        }
    } catch (error) {
        res.status(400).send({status:"Error", error: "Failed to load products"})
    }
})

router.get('/realtimeproducts',(req,res)=>{
    res.render('realTimeProducts',{})
})

export default router;