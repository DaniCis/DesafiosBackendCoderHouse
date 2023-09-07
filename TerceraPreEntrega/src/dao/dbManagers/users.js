import usersModel from '../models/users.models.js'

export default class Users{

    constructor(){
        //console.log('Trabajando con usuarios en mongoDB')
    }

    getAll = async() => {
        let users = await usersModel.find().lean()
        return users;
    }

    getById = async(id) => {
        let user = await usersModel.findOne({_id: id})
        return user;
    }

    getByEmail = async (email) => {
        let user = await usersModel.findOne({ email: email })
        return user
    }

    getByEmailAndPass = async (email, password) => {
        let user = usersModel.findOne({ email: email, password: password })
        return user
    }

    addUser = async (user) => {
        let result = await usersModel.create(user)
        return result
    }

    updateUser = async (id, user) => {
        let result = []
        const exist = await this.getById(id)
        if(exist)
            result = await usersModel.updateOne({_id: id}, user)
        else
            result = false
        return result
    }

    updateUserbyEmail = async (email, user) => {
        let result = []
        const exist = await this.getByEmail(email)
        if(exist)
            result = await usersModel.updateOne({email: email}, user)
        else
            result = false
        return result
    }

    deleteUser = async (id) => {
        let result = []
        const exist = await this.getById(id)
        if(exist)
            result = await usersModel.deleteOne({_id: id})
        else
            result = false
        return result
    }
}