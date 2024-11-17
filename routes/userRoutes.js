import express from "express";
import {createUSer,findUser,getUser,deleteUser,loginUser} from "../controller/userController.js";

const userRoutes=express.Router();

userRoutes.post("/",createUSer);
userRoutes.get("/",findUser);
userRoutes.get("/loginUser",getUser)
userRoutes.delete("/:username",deleteUser);
userRoutes.post("/login",loginUser);

export default userRoutes;