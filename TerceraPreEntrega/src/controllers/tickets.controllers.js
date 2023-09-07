import { ticketService }from '../services/index.js'

class TicketController{
    getTickets = async (req,res) =>{
        try{
            const result = await ticketService.getTickets()
            res.send({ status:"success", payload: result})
        }catch(e){
            res.status(400).send({status:"Error", error: `Failed to load tickets. ${e.message}`})
        }
    }

    createTicket = async(req,res)=>{
        try{
            const {ticket }= req.body
            const result = await ticketService.createTicket(ticket)
            res.send({ status:"success", payload: result})
        }catch(e){
            res.status(400).send({status:"Error", error: `Failed to add ticket. ${e.message}`})
        }
    }
}
export default new TicketController()