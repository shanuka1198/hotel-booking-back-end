import rooms from "../models/room.js";
import {isAdminValid} from "./userController.js";


export function creatRooms(req,res){
    // if (!isAdminValid(req)){
    //     res.status(403).json({
    //         message:"Unauthorized"
    //     })
    //     return
    // }
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
        (resultRoom)=>{
            if (!resultRoom){
                res.json({
                    message:"not found"
                })
            }else {
                console.log(resultRoom)
                res.json({
                    message:"Rooms found",
                    resultRoom:resultRoom
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

export function deleteRoomById(req,res) {
    const roomId = req.params.roomId;

    rooms.findOneAndDelete({roomId: roomId})
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
export function updateRoom(req, res) {
    // if (!isAdminValid(req)) {
    //     // Check if the user is authorized
    //     return res.status(403).json({
    //         message: "Unauthorized"
    //     });
    // }

    const roomId = req.params.roomId;

    rooms.findOneAndUpdate({ roomId: roomId }, req.body,{ new: true })
        .then((updatedRoom) => {
            if (!updatedRoom) {
                return res.status(404).json({
                    message: "Room not found",

                });
            }

            res.status(200).json({
                message: "Room updated successfully",
            });
        })
        .catch((err) => {

            console.error(err);
            res.status(500).json({
                message: "Failed to update Room",
                error: err
            });
        });
}
