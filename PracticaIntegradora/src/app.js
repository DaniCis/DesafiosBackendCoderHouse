import express  from "express"
import __dirname from "./utils.js"
import mongoose from "mongoose"

import viewRouter from './routes/views.router.js'
import productsRouter from './routes/products.router.js'
import handlebars from 'express-handlebars'

const app = express();
const PORT = 8080;

mongoose.set('strictQuery',false)
const connection = mongoose.connect('mongodb+srv://danicis2:<password>@cluster0.qgrka8e.mongodb.net/?retryWrites=true&w=majority')

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',viewRouter)
app.use('/api/products', productsRouter)
//app.use('/api/carts', cartsRouter)
//app.use('/api/messages', messagesRouter)

const server = app.listen(PORT,()=>console.log("Server up"))
