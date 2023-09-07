import {Router} from 'express'
import CartsController from '../controllers/carts.controller.js'

const router = Router ()

router.get('/', CartsController.getCarts)
router.get('/:cid', CartsController.getCartById)
router.post('/', CartsController.createCart)
router.put('/cid', CartsController.updateCart)
router.post('/:cid/products/:pid', CartsController.addProductToCart)
router.put('/:cid/products/:pid',CartsController.updateQuantity)
router.delete('/:cid/products/:pid',CartsController.deleteProductInCart)
router.delete('/:cid',CartsController.deleteAllProductsInCart)
router.post('/:cid/purchase', CartsController.purchaseCart);

export default router