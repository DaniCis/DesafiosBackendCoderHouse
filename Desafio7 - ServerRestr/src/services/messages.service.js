import messagesModel from '../model/messages.model.js'

class MessageService{
    getMessages = async()=>{
        try{
            const messages = await messagesModel.find().lean()
            return messages
        }catch{
            throw new Error(error.message)
        }
    }

    getMessageById = async(id)=>{
        try{
            let message = await messagesModel.find({_id: id})
            return message;
        }catch(e){
            throw new Error(error.message)
        }
    }
    
    createMessage = async(message)=>{
        try{
            let result = await messagesModel.create(message)
            return result;
        }catch(e){
            throw new Error(error.message)
        }
    }
    
    updateMessage = async(id,message)=>{
        try{
            let result = await messagesModel.updateOne({_id: id}, message)
            return result
        }catch(e){
            throw new Error(error.message)
        }
    }
    
    deleteMessage = async(id)=>{
        try{
            let message = await messagesModel.deleteOne({_id: id})
            return message
        }catch(e){
            throw new Error(error.message)
        }
    }
}
export default new MessageService()