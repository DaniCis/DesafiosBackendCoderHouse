import { Router } from "express"
import messagesController from "../controllers/messages.controller.js";
 
class MessageRouter{
    constructor(){
        this.InicioMensaje= Router();
        this.InicioMensaje.get('/chat',messagesController.getMessages)
    }
    getRouter(){
        return this.InicioMensaje
    }
}
export default new MessageRouter()