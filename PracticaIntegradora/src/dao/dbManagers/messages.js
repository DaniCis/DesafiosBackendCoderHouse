import messagesModel from '../models/messages.js'

export default class Messages{
   
    constructor(){
        console.log('Trabajando con mensajes en mongoDB')
    }
    getAll = async() => {
        let messages = await messagesModel.find()
        return messages;
    }

    getById = async(id) => {
        let message = await messagesModel.find({_id: id})
        return message;
    }

    addMessage = async (message) => {
        let message = await messagesModel.create(message)
        return message
    }

    updateMessage = async (id, message) => {
        let message = await messagesModel.updateOne({_id: id}, message)
        return message
    }

    deleteMessage = async (id) => {
        let message = await messagesModel.deleteOne({_id: id})
        return message
    }
}