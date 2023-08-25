import messageService from '../services/messages.service.js'
import { STATUS } from '../utils/constantes.js'

class MessageController{
    
    getMessages = async (req,res) =>{
        try{
            const result = await messageService.getMessages()
            res.status(201).json({messages: result, status:STATUS.SUCCESS})
        }catch(e){
            res.status(400).json({ error:e.message, status:STATUS.FAIL})
        }
    }

    createMessage = async(req,res)=>{
        try{
            const {message }= req.body
            const result = await messageService.createMessage(message)
            res.status(201).json({message: result, status:STATUS.SUCCESS})
        }catch(e){
            res.status(400).json({ error:e.message, status:STATUS.FAIL})
        }
    }
}

export default new MessageController()