import {Router} from 'express'
import MessagesController from '../controllers/messages.controller.js'

const router = Router ()

router.get('/', MessagesController.getMessages)
router.post('/', MessagesController.createMessage)

export default router