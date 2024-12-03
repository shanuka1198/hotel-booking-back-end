import rooms from "../models/room.js";
import {isAdminValid} from "./userController.js";
import gallery from "../models/gallery.js";

export function creatRooms(req,res){
    if (!isAdminValid(req)){
        res.status(403).json({
            message:"Unauthorized"
        })
    }
    const roomsDetails=req.body;
    const newRooms=new rooms(roomsDetails);

    newRooms.save().then(
        (result)=>{
            res.json({
                message:"Save Rooms",
                result:result
            })
        }
    ).catch(
        (err)=>{
            res.json({
                message:"Can't Save Rooms",
                result:err
            })
        }
    )
}

export function getRooms(req,res){
    rooms.find().then(
        (result)=>{
            res.json({
                message:"find Rooms",
                result:result
            })
        }
    ).catch(
        (err)=>{
            res.json({
                message:"can't find Rooms",
                result:err
            })
        }
    )
}

export function getRoomsById(req,res){
    const roomId=req.params.roomId;

    rooms.findOne({roomId:roomId}).then(
        (result)=>{
            if (result==null){
                res.json({
                    message:"room not found",
                })

            }else {
                res.json(
                    {
                        message : "Room found",
                        result : result
                    }
                )
            }

        }
    ).catch(
        (err)=> {
            res.json({
                message: "can't find rooms by id",
                result: err
            })
        }
    )
}

export function getRoomsByCategory(req,res){
    const category=req.params.category;

    rooms.find({category:category}).then(
        (result)=>{
            if (result==null){
                res.json({
                    message:"not found"
                })
            }else {
                res.json({
                    message:"Rooms found",
                    result:result
                })
            }
        }
    ).catch(
        (err)=>{
                res.json({
                    message: "can't find room",
                    result: err
                })
        }
    )
}

export function deleteRoomById(req,res){
    const roomId = req.params.roomId;

    rooms.findOneAndDelete({roomId:roomId})
        .then((result) => {
            if (!result) {
                return res.status(404).json({
                    message: "Room not found"
                });
            }

            res.json({
                message: "Rooms deleted successfully",
                result: result
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error occurred",
                error: err.message
            });
        });
}