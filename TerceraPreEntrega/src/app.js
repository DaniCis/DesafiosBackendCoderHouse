import express from "express"
import CONFIG from "./config/config.js";
import cors from 'cors'
import mongoose from "mongoose";

const{ PORT, MONGO_URI } = CONFIG
const app= express();

app.use(cors());
app.use(express.json());
app.use( express.urlencoded({extended: true}))

app.listen(PORT,()=>{
    console.log(`Server up in ${PORT}`)
})

mongoose.connect(MONGO_URI)
.then(()=>{
  console.log("Connect DB")
})
.catch((error)=>{
    console.log("Failed to connect DB")
    throw error
})