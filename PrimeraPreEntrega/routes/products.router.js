import { Router } from "express";

const router = Router()
const manager = new ProductManager('../src/productos.json')

router.get('/',async(req,res)=>{
    let {limit} = req.query
    try {
        const products = await manager.getProducts()
        if(limit){
            const limited = products.slice(0,limit)
            res.json(limited)
        }else{
            res.json(products)
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/:pid', async(req,res)=>{
    try{
        let idProducto = parseInt(req.params.pid)
        const product = await manager.getProductById(idProducto)
        if(product !== null)
            res.send(product)
        else
            res.send({Error:'Product not found'})
    }catch(error){
        console.log(error)
    }
})

router.post('/',(req,res)=>{

})

router.put('/:pid',(req,res)=>{

})
export default router;