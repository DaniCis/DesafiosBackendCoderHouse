import {Router} from "express"
import userModel from "../dao/models/users.js";
import { createHash, isValidPassword } from "../utils.js"

const router= Router();

router.post('/resetPassword',async(req,res)=>{
    const {email,password} = req.body;
    if(!email||!password) return res.status(400).send({status:"error",error:"Valores incompletos"});
    const user = await userModel.findOne({email});
    if(!user) return res.status(404).send({status:"error",error:"Usuario no encontrado"});
    const newHashedPassword = createHash(password);
    await userModel.updateOne({_id:user._id},{$set:{password:newHashedPassword}});
    res.send({status:"success",message:"Contraseña restaurada"});
})

router.get('/failregister',async(req,res)=>{
    res.send({status:'error',error:"Registro fallido"})
})

export default router;