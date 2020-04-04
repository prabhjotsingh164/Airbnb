const express = require('express');
const router = express.Router();

const roomsModel= require("../models/rooms");


router.get("/list",(req,res)=>{
    res.render("roomlisting",{
        title:"Room Listings",
        rooms: roomsModel.getAllRooms()
        
    });
});





module.exports=router;