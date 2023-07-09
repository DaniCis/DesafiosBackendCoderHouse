import cartsModel from '../models/carts.js'

export default class Carts{

    constructor(){
        console.log('Trabajando con carritos en mongoDB')
    }

    getAll = async() => {
        let carts = await cartsModel.find()
        return carts;
    }

    getById = async(id) => {
        let cart = await cartsModel.find({_id: id})
        return cart;
    }

    addCart = async (cart) => {
        let result = await cartsModel.create(cart)
        return result
    }

    addProductToCart = async (cartId,productId) => {
        let result = await cartsModel.updateOne({_id: cartId},productId)
        return result
    }

    updateCart = async (id, cart) => {
        let result = await cartsModel.updateOne({_id: id}, cart)
        return result
    }

    deleteCart = async (id) => {
        let result = await cartsModel.deleteOne({_id: id})
        return result
    }
}