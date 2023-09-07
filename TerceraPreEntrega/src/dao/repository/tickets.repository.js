export default class TicketsRepository{
    constructor(dao) {
        this.dao = dao;
    }

    createTicket(ticket){
        return this.dao.createTicket(ticket)
    }

    findTicketBy(value){
        return this.dao.findTicketBy(value)
    }

    updateTicket(ticketId, amount){
        return this.dao.updateTicket(ticketId, amount)
    }

    getTickets(){
        return this.dao.getTickets()
    }

    deleteTicket(ticketId){
        return this.dao.deleteTicket(ticketId)
    }
}