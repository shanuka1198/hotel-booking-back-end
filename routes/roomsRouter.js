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

roomsRouter.get("/id/:roomId", getRoomsById);
roomsRouter.put("/:roomId", updateRoom);
roomsRouter.get("/", getRooms);
roomsRouter.post("/", creatRooms);
roomsRouter.get("/category/:category", getRoomsByCategory);
roomsRouter.delete("/:roomId", deleteRoomById);




export default roomsRouter;