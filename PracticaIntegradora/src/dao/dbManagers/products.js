import productsModel from '../models/products.js'

export default class Products{

    constructor(){
        console.log('Trabajando con productos en mongoDB')
    }

    getAll = async() => {
        let products = await productsModel.find()
        return products;
    }

    getById = async(id) => {
        let product = await productsModel.find({_id: id})
        return product;
    }

    addProduct = async (product) => {
        let result = await productsModel.create(product)
        return result
    }

    updateProduct = async (id, product) => {
        let result = await productsModel.updateOne({_id: id}, product)
        return result
    }

    deleteProduct = async (id) => {
        let result = await productsModel.deleteOne({_id: id})
        return result
    }
}