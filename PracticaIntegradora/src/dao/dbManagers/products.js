import productsModel from '../models/products.js'

export default class Products{

    constructor(){
        console.log('Trabajando con productos en mongoDB')
    }
    getAll = async()=>{
        let products = await productsModel.find()
        return products;
    }
    addProduct = async product =>{
        let result = await productsModel.insertOne(product)
        return result
    }
    updateProduct = async product =>{
        let result = await productsModel.updateOne(product)
        return result
    }
    deleteProduct = async product =>{
        let result = await productsModel.deleteOne(product)
        return result
    }
}