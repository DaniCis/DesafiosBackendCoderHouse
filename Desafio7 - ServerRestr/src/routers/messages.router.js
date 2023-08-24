import { Router }from "express"
 
class MessageRouter{
    constructor(){
        this.InicioMensaje= Router();
        //this.InicioMensaje.get('/',toyController.getToy)
    }
    getRouter(){
        return this.InicioMensaje
    }
}
export default new MessageRouter()