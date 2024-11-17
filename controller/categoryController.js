import category from "../models/category.js";
import {isAdminValid} from "./userController.js";


export function createCategory(req,res){
    if(!isAdminValid(req)){
        res.status(403).json({
            message : "Unauthorized"
        })
        return
    }

    const categories=req.body;
    const newCategory=new category(categories);
    newCategory.save().then(
        (result)=>{
            res.json(
                {
                    message:"Create Category",
                    result:result
                }
            )
        }
    ).catch(
        (err)=>{
            res.json(
                {
                    message:"Can't Create Category",
                    result:err
                }
            )
        }
    )
}

export function deleteCategory(req,res){

    if(!isAdminValid(req)){
        res.status(403).json({
            message : "Unauthorized"
        })
        return
    }

    const name=req.params.name;


    category.findOneAndDelete({name:name}).then(
        ()=>{
            res.json({
                message:"category deleted"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message:"category delete fail"
            })
        }
    )

}

export function findCategory(req,res){
    category.find().then(
        (result)=>{
            res.json({
                message:"find category",
                result:result
            })
        }
    ).catch(
        (err)=>{
            res.json({
                message:"can't find category",
                result:err
            })
        }
    )
}

export function findByCategory(req,res){
    const name=req.params.name;
    category.findOne({name:name}).then(
        (result)=>{
            res.json({
                message:"find category",
                result:result
            })
        }
    ).catch(
        (err)=> {
            res.json({
                message: "can't find category",
                result: err
            })
        }
    )
}


export function updateCategory(req, res) {
    if (!isAdminValid(req)) {
        // Check if the user is authorized
        return res.status(403).json({
            message: "Unauthorized"
        });
    }

    const name = req.params.name;
    // Use findOneAndUpdate to find and update the category by name
    category.findOneAndUpdate({ name: name }, req.body,{ new: true })
        .then((updatedCategory) => {
            if (!updatedCategory) {
                // If the category is not found, send an error response
                return res.status(404).json({
                    message: "Category not found",


                });
            }
            // Send a successful response with the updated category
            res.status(200).json({
                message: "Category updated successfully",
            });
        })
        .catch((err) => {
            // If there's an error in the database operation
            console.error(err);
            res.status(500).json({
                message: "Failed to update category",
                error: err
            });
        });
}