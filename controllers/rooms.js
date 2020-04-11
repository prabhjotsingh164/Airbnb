const express = require('express');
const router = express.Router();
const roomModel = require("../models/addroom");
//const roomsModel= require("../models/rooms");






router.get("/list",(req,res)=>{
    roomModel.find({location:"toronto"})
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
        res.render("roomlisting",{
            data:filteredRoom
  
        });
    })
    
    .catch(err=>console.log(`Error happened when pulling from the database: ${err}`));
  
  });

router.post("/search",(req,res)=>{
    //console.log(req.body.room_search);
        if(req.body.room_search=="all")
        {
            roomModel.find()
        .then((rooms)=>{
            const filteredRoom = rooms.map(room=>{
      
                return{
                   id: room._id,
                   title:room.title,
                   description:room.description,
                   price: room.price,
                   location: room.location,
                   roomimage: room.roomimage,
                   room_search:req.body.room_search
                   
                }
    
        })
        res.render("roomlisting",{
    
            data:filteredRoom
    
        });
        })
        .catch(err=>console.log(`Error happened when pulling from the database: ${err}`));    
    }
    
    else
    {
        roomModel.find({location:req.body.room_search})
        .then((rooms)=>{
            const filteredRoom = rooms.map(room=>{
      
                return{
                   id: room._id,
                   title:room.title,
                   description:room.description,
                   price: room.price,
                   location: room.location,
                   roomimage: room.roomimage,
                   room_search:req.body.room_search
                   
                }
    
        })
        res.render("roomlisting",{
    
            data:filteredRoom
    
        });
        })
        .catch(err=>console.log(`Error happened when pulling from the database: ${err}`));
    }
    
})







module.exports=router;