import { createHash } from "../utils/utils.js";
import{ userService } from '../services/index.js'

class UserController{

    getUsers = async (req, res) => {
        try {
            let users = await userService.getUsers() 
            res.send({ status:"Success", payload: users})
        } catch (error) {
            res.status(400).send({status:"Error", error: `Failed to get users. ${error.message}`})
        }
    }

    getUserById = async (req, res) => {
        try {
            const id = req.params.uid
            let user = await userService.getUserById(id) 
            res.send({ status:"Success", payload: user})
        } catch (error) {
            res.status(400).send({status:"Error", error: `Failed to get users. ${error.message}`})
        }
    }

    createUser = async (req, res) => {
        try {
            let user = req.body;
            const newUser = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: createHash(user.password),
            };
            let result = await userService.createUser(newUser); 
            res.send({ status:"Success", payload: result})
        } catch (error) {
            res.status(400).send({status:"Error", error: `Failed to add user. ${error.message}`})
        }
    }

    updateUser = async (req, res) => {
        try {
            const { uid } = req.params;
            const user = req.body;

            let userToReplace = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password ? createHash(user.password) : undefined,
            }

            let result = await userService.updateUser(uid, userToReplace);
            res.send({ status:"Success", payload: result})
        } catch (error) {
            res.status(400).send({status:"Error", error: `Failed to update user. ${error.message}`})
        }
    }

    deleteUser = async (req, res) => {
        try {
            const { uid } = req.params;

            let result = await userService.deleteUser(uid);

            res.sendSuccess(result);
        } catch (error) {
            res.status(400).send({status:"Error", error: `Failed to delete user. ${error.message}`})
        }
    }

}
export default new UserController()