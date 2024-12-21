import express from "express";
import {
    createCategory,
    deleteCategory,
    findCategory,
    findByCategory,
    updateCategory,

} from "../controller/categoryController.js";

const categoryRouter=express.Router();

categoryRouter.delete("/:name",deleteCategory);
categoryRouter.post("/",createCategory);
categoryRouter.get("/",findCategory);
categoryRouter.get("/:category",)
categoryRouter.get("/:name",findByCategory);
categoryRouter.put("/:name",updateCategory);

export default categoryRouter;