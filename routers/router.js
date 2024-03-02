import express from "express";
import {GetHome,PostHome,Getabout,PageNotFound} from "../controllers/controller.js"

let router = express();

router.get("/home",GetHome);

router.get("/about", Getabout);

//Get POST Rout
router.post("/",PostHome);

//error 404
router.get("*",PageNotFound);


export { router };

