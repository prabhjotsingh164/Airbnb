const express = require('express');
const router = express.Router();
const roomModel = require("../models/addroom");
const froomModel = require("../models/feature_rooms");
const expModel = require("../models/exp");

const path = require("path");
const isAuth  = require("../middleware/auth");
const isAuthor  = require("../middleware/author");



router.get("/add",(req,res)=>{
    res.render("addroom",{
        title:"Add Room",
        headinginfo: "Room Title",
        action:"add"
        
    })
});

router.get("/addf",(req,res)=>{
  res.render("addfroom",{
      title:"Add Featured Room",
      headinginfo: "Room Title",
      action:"addf"
      
  })
});

router.get("/addexp",(req,res)=>{
  res.render("exp",{
      title:"Add Experience",
      headinginfo: "Experience Title",
      action:"addexp"
      
  })
});


router.post("/add",(req,res)=>{
    const errors= [];
    if(req.body.title=="")
  {
    errors.push("Sorry, you must enter a title");

  }

  if(req.body.description=="")
  {
    errors.push("Sorry, you must enter the description of room")
  }
  if(req.body.price=="")
  {
      errors.push("enter the price per night")
  }
  if(req.body.location=="")
  {
    errors.push("Sorry, you must enter the location of room");

  }


  if(errors.length > 0)
  {
    res.render("addroom",{
      messages : errors
    })
  }
  else
  {
    const newRoom = {
      title: req.body.title,
      description:req.body.description,
      price:req.body.price,
      location:req.body.location
  

    }
    const room = new roomModel(newRoom);
      room.save()
   
    .then((room) => {
      req.files.roomimage.name =`pro_pic${room._id}${path.parse(req.files.roomimage.name).ext}` ;
     req.files.roomimage.mv(`public/uploads/${req.files.roomimage.name}`)
     .then(()=>{
         roomModel.updateOne({_id:room._id},{
             roomimage: req.files.roomimage.name
         })
         .then(()=>{
            res.redirect("/admin/adm");
         })
        
     })
      })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })
      
    
  }
    
 
});
router.get("/adm",(req,res)=>{
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
        res.render("admin",{
            data:filteredRoom
  
        });
    })
    
    .catch(err=>console.log(`Error happened when pulling from the database: ${err}`));
  
  });

  router.get("/edit/:id",(req,res)=>{
    roomModel.findById(req.params.id)
    .then((task)=>{
        const {_id,title,description,price,location,roomimage}=task;
        res.render("adminedit",{
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
  router.put("/update/:id",(req,res)=>{
     //req.files.roomimage.mv(`public/uploads/${req.files.roomimage.name}`)
    const task = 
    {
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        location:req.body.location,
        
    }

    roomModel.updateOne({_id:req.params.id},task)
            .then(()=>{

        res.redirect("/admin/adm");
    })

    
    .catch(err=>console.log(`Error happened when updating the database: ${err}`));



    
});

router.delete("/delete/:id",(req,res)=>{

  roomModel.deleteOne({_id:req.params.id})
  .then(()=>{
   res.redirect("/admin/adm");   
  })
  .catch(err=>console.log(`Error happened when deleting the database: ${err}`));


  
});


router.post("/addf",(req,res)=>{
  const errors= [];
  if(req.body.title=="")
{
  errors.push("Sorry, you must enter a title");

}

if(req.body.description=="")
{
  errors.push("Sorry, you must enter the description of room")
}
if(req.body.price=="")
{
    errors.push("enter the price per night")
}
if(req.body.location=="")
{
  errors.push("Sorry, you must enter the location of room");

}


if(errors.length > 0)
{
  res.render("addfroom",{
    messages : errors
  })
}
else
{
  const newRoom = {
    title: req.body.title,
    description:req.body.description,
    price:req.body.price,
    location:req.body.location


  }
  const room = new froomModel(newRoom);
    room.save()
 
  .then((room) => {
    req.files.roomimage.name =`pro_pic${room._id}${path.parse(req.files.roomimage.name).ext}` ;
   req.files.roomimage.mv(`public/uploads/${req.files.roomimage.name}`)
   .then(()=>{
       froomModel.updateOne({_id:room._id},{
           roomimage: req.files.roomimage.name
       })
       .then(()=>{
          res.redirect("/admin/adm");
       })
      
   })
    })
  .catch((err)=>{
      console.log(`Error ${err}`);
  })
    
  
}
  

});

router.post("/addexp",(req,res)=>{
  const errors= [];
  if(req.body.title=="")
{
  errors.push("Sorry, you must enter a title");

}

if(req.body.description=="")
{
  errors.push("Sorry, you must enter the description of room")
}
if(req.body.price=="")
{
    errors.push("enter the price per night")
}
if(req.body.location=="")
{
  errors.push("Sorry, you must enter the location of room");

}


if(errors.length > 0)
{
  res.render("exp",{
    messages : errors
  })
}
else
{
  const newExp = {
    title: req.body.title,
    place:req.body.place,
    rating:req.body.rating,
    nov:req.body.nov


  }
  const exp = new expModel(newExp);
    exp.save()
 
  .then((exp) => {
    req.files.expimage.name =`pro_pic${exp._id}${path.parse(req.files.expimage.name).ext}` ;
   req.files.expimage.mv(`public/uploads/${req.files.expimage.name}`)
   .then(()=>{
       expModel.updateOne({_id:exp._id},{
           expimage: req.files.expimage.name
       })
       .then(()=>{
          res.redirect("/admin/adm");
       })
      
   })
    })
  .catch((err)=>{
      console.log(`Error ${err}`);
  })
    
  
}
  

});





  





module.exports=router;