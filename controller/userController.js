import user from "../models/user.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config()

export function createUSer(req,res) {
    const users = req.body;
    const password=req.body.password;
    users.password=bcrypt.hashSync(password, 10);

    const newUser = new user(users);

    newUser.save().then(
        () => {

            res.json({
                massage: "User is Created"
            })
        }
    ).catch(
        () => {
            res.json({
                massage: "User is not Created"
            })
        }
    )
}

export function findUser(req,res){
    user.find().then(
        (userList) => {

            res.json({
                list:userList
            })
        }
    ).catch(
        () => {

            res.json({
                massage: "User not find"
            })
        }
    )
}

export function deleteUser(req,res){
    if (!isAdminValid(req)){
        res.json({
            message:"Unauthorized"
        })
        return;
    }
    const username=req.params.username;

    user.findOneAndDelete({username:username}).then(
        ()=>{
            res.json({
                message:"delete user"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message:"can't delete user"
            })
        }
    )
}

export function loginUser(req,res){
    const credential=req.body;
    const password=req.body.password;

    const passwordHash=bcrypt.hashSync(password,10);

    user.findOne({email:credential.email}).then(
        (user)=> {
            if (user == null) {
                res.status(404).json({
                    message: "user not found"
                })
            } else {
                const passwordValid = bcrypt.compareSync(credential.password, user.password);
                if (!passwordValid) {
                    res.json({
                        message: "password invalid"
                    })

                } else {
                    const payload = {
                        id: user.id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        type: user.type
                    }

                    const token = jwt.sign(payload, process.env.JWT);

                    res.json({
                        user: user,
                        token: token,
                        message: "User Found"
                    })
                }
            }
        }
    )
}

export function isAdminValid(req){

    if(req.user == null){
        return false
    }
    if(req.user.type !== "admin"){
        return false
    }
    return true;

}

export function isCustomerValid(req){

    if(req.user == null){
        return false
    }
    if(req.user.type !== "customer"){
        return false
    }
    return true;

}

export function getUser(req,res){
    const users=req.user;

    if (users==null){
        res.json({
            message:"User Not Found"
        })
    }else {
        res.json({
            message:"User Found",
            users:users,

        })
    }
}