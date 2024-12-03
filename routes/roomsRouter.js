import express from "express";
import {creatRooms, getRooms, getRoomsById, getRoomsByCategory, deleteRoomById} from "../controller/roomsController.js";

const roomsRouter=express.Router();

roomsRouter.get("/",getRooms);
roomsRouter.get("/:category",getRoomsByCategory);
roomsRouter.get("/:roomId",getRoomsById);
roomsRouter.post("/",creatRooms);
roomsRouter.delete("/:roomId",deleteRoomById)



export default roomsRouter;