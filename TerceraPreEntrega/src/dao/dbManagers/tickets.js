import ticketsModel from '../models/tickets.models.js'

export default class Tickets{

    constructor(){
        //console.log('Trabajando con tickets en mongoDB')
    }

    getAll = async() => {
        let tickets = await ticketsModel.find().lean()
        return tickets;
    }

    getById = async(id) => {
        let ticket = await ticketsModel.findOne({_id: id})
        return ticket;
    }

    addProduct = async (ticket) => {
        let result = await ticketsModel.create(ticket)
        return result
    }

    updateProduct = async (id, ticket) => {
        let result = []
        const exist = await this.getById(id)
        if(exist)
            result = await ticketsModel.updateOne({_id: id}, ticket)
        else
            result = false
        return result
    }

    deleteProduct = async (id) => {
        let result = []
        const exist = await this.getById(id)
        if(exist)
            result = await ticketsModel.deleteOne({_id: id})
        else
            result = false
        return result
    }


}