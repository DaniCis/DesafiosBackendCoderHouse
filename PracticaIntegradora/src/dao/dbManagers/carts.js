import cartsModel from '../models/carts.js'
import productsModel from '../models/products.js'
import productManager from './products.js'

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
        let result = []
        const cart = await this.getById(cartId)
        if(cart.length > 0){
            const validProduct = await productsModel.find({_id: productId})
            if(validProduct.length > 0){
                //revisar desde aqui
                const update = { $inc: { "products.$[product].quantity": 1 } }
                const options = {
                    arrayFilters: [{ "product._id": productId }],
                    upsert: true,
                }
                result = await cartsModel.findOneAndUpdate({ _id: cartId }, update, options)
                console.log(result)
            }else
            result = false
        }
        else
            result = false
        return result
    }

    updateCart = async (id, cart) => {
        let result = []
        const exist = await this.getById(id)
        if(exist.length > 0)
            result = await cartsModel.updateOne({_id: id}, cart)
        else
            result = false
        return result
    }

    deleteCart = async (id) => {
        let result = []
        const exist = await this.getById(id)
        if(exist.length > 0)
            result = await cartsModel.deleteOne({_id: id})
        else
            result = false
        return result
    }
}