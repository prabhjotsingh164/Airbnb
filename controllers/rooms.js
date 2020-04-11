const express = require('express');
const router = express.Router();
const roomModel = require("../models/addroom");
const broomModel =require("../models/bookroom");
//const roomsModel= require("../models/rooms");






router.get("/list",(req,res)=>{
    roomModel.find()
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

router.get("/add/:id",(req,res)=>{
    roomModel.findById(req.params.id)
    .then((task)=>{
        const {_id,title,description,price,location,roomimage}=task;
        res.render("roomdescription",{
            _id,
            title,
            description,
            price,
            location,
            roomimage
            
        })
    })
    .catch(err=>console.log(`Error happened when pulling from the database: ${err}`));
  })

  router.post("/book/:id",(req,res)=>{
  
    const newBookedRoom = 
    {
        
    userId:req.session.userInfo._id,
    roomId:req.params.id,
    title: req.body.title,
    description:req.body.description,
    price:req.body.price,
    location:req.body.location,
      
    from:req.body.from,
    to:req.body.to,
    roomimage : req.body.roomimage
  

    }
    //console.log("roomimage Path"+req.body.roomimage);
    const user = new broomModel(newBookedRoom);
      user.save()
    .then(()=>
      {
    res.render("welcome");
    })
      .catch(err=>console.log(`Error happened when inserting in the database :${err}`));


    
    
 
});
router.delete("/delete/:id",(req,res)=>{

    broomModel.deleteOne({_id:req.params.id})
    .then(()=>{
     res.redirect("/login/brooms");   
    })
    .catch(err=>console.log(`Error happened when deleting the database: ${err}`));
  
  
    
  });
  



module.exports=router;