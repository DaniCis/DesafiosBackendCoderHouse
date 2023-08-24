class MessageService{
    async getMessages(){
        try{
           // const response= await toyModel.find()
            console.log(response)
            return response
        }catch{
            throw new Error(error.message)
        }
    }
}
export default new MessageService()