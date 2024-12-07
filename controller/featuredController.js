
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
        const featuredCount=7;

        const roomFeatured={
            roomId:result.roomId,
            category:result.category,
            maxGuests:result.maxGuests,
            available:result.available,
            photos:result.photos,
            specialDescription:result.specialDescription,
            notes:result.notes
        };

        featured.countDocuments().then((count)=>{
            if (featuredCount>count){
                const newFeatured=new featured(roomFeatured);
                newFeatured.save().then(
                    (result)=>{
                        res.json({
                            message:"Save Featured",
                            result:result
                        })
                    }
                ).catch(
                    (err)=>{
                        res.json({
                            message:"Can't Save Featured",
                            result:err
                        })
                    }
                )
            }else {
                res.json({
                    message:"featured limit are over",
                })
            }

        });
    })
}

export function getFeature(req,res){
    featured.find().then((result)=>{
        res.json({
            message:"feature found",
            result:result
        });
    }).catch((err)=>{
        res.json({
            message:"feature not found",
            err:err
        });
    })
}

export function deleteFeature(req,res){
    const roomId=req.params.roomId;

    featured.deleteOne({roomId:roomId}).then((result)=>{
        res.json({
            message:"feature deleted",
            result:result
        });

    }).catch((err)=>{
        res.json({
            message:"feature not deleted",
            err:err
        });

    })

}

export function getFeatureById(req,res){
    const roomId=req.params.roomId;
    featured.find({roomId:roomId}).then((result)=>{
        res.json({
            message:"feature found",
            result:result
        });
    }).catch((err)=>{
        res.json({
            message:"feature not found",
            err:err
        });
    })
}



