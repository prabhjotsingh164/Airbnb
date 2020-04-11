const express = require('express');
const router = express.Router();

const expModel= require("../models/exp");
const froomModel= require("../models/feature_rooms");




// router.get("/",(req,res)=>{
//     res.render("index",{
//         title:"Home",
//         headinginfo: "Home Page",
//         randomContent:"AAAAAAAAAAAAA",
//         exps: expModel.getAllExps(),
//         feature_rooms:featureModel.getAllFeatureRooms()
//     });
//     });

    router.get("/",(req,res)=>{
    froomModel.find()
    
    .then((rooms)=>{
        const filteredRoom = rooms.map(room=>{
  
            return{
               id: room._id,
               title:room.title,
               description:room.description,
               price: room.price,
               location: room.location,
               roomimage: room.roomimage
            }
  
        });

        
        res.render("index",{
            data:filteredRoom,
            data1:expModel.getAllExps()
            
  
        });
    })
    
    .catch(err=>console.log(`Error happened when pulling from the database: ${err}`));
  
  });

  


module.exports=router;