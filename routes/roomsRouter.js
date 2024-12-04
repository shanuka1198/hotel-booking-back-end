import express from "express";
import {
    creatRooms,
    getRooms,
    getRoomsById,
    getRoomsByCategory,
    deleteRoomById,
    updateRoom
} from "../controller/roomsController.js";

const roomsRouter=express.Router();


roomsRouter.put("/:roomId",updateRoom)
roomsRouter.get("/",getRooms);
roomsRouter.get("/:category",getRoomsByCategory);
roomsRouter.get("/:roomId",getRoomsById);
roomsRouter.post("/",creatRooms);
roomsRouter.delete("/:roomId",deleteRoomById)




export default roomsRouter;