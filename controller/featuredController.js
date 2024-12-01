
import {isAdminValid} from "./userController.js";
import rooms from "../models/room.js";
import featured from "../models/featured.js";


export function createFeatured(req,res){
    // if (!isAdminValid(req)){
    //     res.status(403).json({
    //         message:"Unauthorized"
    //     })
    //     return
    // }

    const roomId=req.params.roomId;
    rooms.findOne({roomId:roomId}).then((result)=>{
        if (!result){
            res.json({
                message:"room id not found",
            })
            return
        }
        const roomFeatured={
            roomId:result.roomId,
            category:result.category,
            maxGuests:result.maxGuests,
            available:result.available,
            photos:result.photos,
            specialDescription:result.specialDescription,
            notes:result.notes
        };

        const newFeatured=new featured(roomFeatured);
        newFeatured.save().then(
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
    })
}



