import { Router } from "express";

const router = Router()
const manager = new CartManager('../src/carrito.json')

router.get('/',(req,res)=>{

})

router.get('/:cid',(req,res)=>{

})


router.post('/',(req,res)=>{

})

router.post('/:cid/product/:pid',(req,res)=>{

})
export default router;
