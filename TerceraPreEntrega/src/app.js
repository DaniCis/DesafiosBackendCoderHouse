import express from "express"
import CONFIG from "./config/config.js"
import cors from 'cors'
import mongoose from "mongoose"
import { Server } from "socket.io"
import __dirname from "./utils/utils.js"
import session from "express-session";
import MongoStore from "connect-mongo";
import handlebars from 'express-handlebars'
import passport from "passport";
import initPassport from "./config/passport.config.js"
import messagesController from './controllers/messages.controller.js';
import appRouter from './routers/app.router.js'

const{ PORT, MONGO_URI } = CONFIG
const app= express();

app.use(cors());
app.use(express.json());
app.use( express.urlencoded({extended: true}))

const httpServer = app.listen(PORT,()=>console.log(`Server up in ${PORT}`))
const io = new Server(httpServer)

mongoose.set('strictQuery',false)
mongoose.connect(MONGO_URI)
.then(()=>{
  console.log("Connect DB")
})
.catch((error)=>{
  console.log("Failed to connect DB")
  throw error
})

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars');
app.use(express.static(__dirname + "/public"));

app.use(session({
    store: MongoStore.create({
      mongoUrl:MONGO_URI,
      ttl:3600
    }),
    secret:"12345abcd",
    resave:false,
    saveUninitialized:false
}))

initPassport();
app.use(passport.session({
  secret:"SecretCoders"
}));

app.use(passport.initialize())
app.use ('/api' ,appRouter)


const messages=[];
io.on('connection',socket=>{
  socket.on('message', data=>{
    messages.push(data)
    io.emit('messageLogs',messages)
    messagesController.createMessage(data)
  })
})