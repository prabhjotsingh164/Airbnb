const express = require('express');
const router = express.Router();

const expModel= require("../models/exp");
const featureModel= require("../models/feature_rooms");




router.get("/",(req,res)=>{
    res.render("index",{
        title:"Home",
        headinginfo: "Home Page",
        randomContent:"AAAAAAAAAAAAA",
        exps: expModel.getAllExps(),
        feature_rooms:featureModel.getAllFeatureRooms()
    });
    });



module.exports=router;