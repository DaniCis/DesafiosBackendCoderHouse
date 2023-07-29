import passport from "passport";
import local from "passport-local";
import userModel from "../dao/models/users.js";
import githubService from 'passport-github2';

const localStrategy = local.Strategy;

const initPassport =() =>
{
    passport.serializeUser((user,done)=>{
        done(null,user._id)
    });
    passport.deserializeUser(async(id,done)=>{
        let user = await githubService.findById(id);
        done(null,user);
    })
    passport.use('github', new githubService({
        clientID: "Iv1.2560b149242cb721",
        clientSecret: "af4a36a1bd973db2f2e7e2dc9d458b18a572d3c4",
        callbackURL: "http://localhost:8080/api/session/githubcallback"
    }, async (accessToken,refreshToken,profile, done)=>
        { try{
            console.log(profile);
            let user = await userModel.findOne({email:profile.json.email})
            if(!user){
                let newUser = {
                    first_name: profile._json.name,
                    last_name: profile.json.last_name,
                    age:profile._json.age,
                    email: profile._json.email,
                    password:''
                }
                let result = await  userModel.create(newUser);
                done(null,result)
            }else{
                done(null,user)
            }
        }catch(error){
            return done(error)
        }
    }))
}

export default initPassport;