import express from "express";
import {creatRooms, getRooms, getRoomsById,getRoomsByCategory} from "../controller/roomsController.js";

const roomsRouter=express.Router();

roomsRouter.get("/",getRooms);
roomsRouter.get("/:category",getRoomsByCategory);
roomsRouter.get("/:roomId",getRoomsById);
roomsRouter.post("/",creatRooms);



export default roomsRouter;