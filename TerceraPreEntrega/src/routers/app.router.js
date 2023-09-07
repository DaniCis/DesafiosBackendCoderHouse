import { Router } from 'express'
import usersRouter from './users.router.js'
import productsRouter from './products.router.js'
import messagesRouter from './messages.router.js'
import cartsRouter from './carts.router.js'
import viewRouter from './views.router.js'
import sessionRouter from './sessions.router.js'

const router = Router ()

router.use('/users', usersRouter)
router.use('/products',productsRouter)
router.use('/messages',messagesRouter)
router.use('/carts',cartsRouter)
router.use('/',viewRouter)
router.use('/session', sessionRouter)

export default router