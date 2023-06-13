import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default class CartManager {
    
    constructor(path){
        this.path = path
        this.cart = []
    }


}