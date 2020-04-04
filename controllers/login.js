const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'singh19m94@gmail.com',
      pass: 'fengles1994!'
    }
  });


router.get("/log",(req,res)=>{
    res.render("login",{
        title:"Login",
        headinginfo: "Login",
        
    })
});



router.post("/log",(req,res)=>{
    const errors= [];
   

  if(req.body.uname=="")
  {
    errors.push("Sorry, you must enter your Username")
  }
  if(req.body.psw=="")
  {
      errors.push("enter your password")
  }


  if(errors.length > 0)
  {
    res.render("login",{
      messages : errors
    })
  }
  else
  {
      
    const accountSid = 'AC19c80835ab35434b88c649ae6e26b9a1';
    const authToken = 'c993064fd7e8dff47cd51401cef4373b';
    const client = require('twilio')(accountSid, authToken);
    const mailOptions = {
        from: 'mig1994.prabh@gmail.com',
        to: 'mig1994.prabh@gmail.com',
        subject: 'Welcome to Airbnb',
        text: 'Welcome to Airbnb. Hope you find the best room you are looking for. Enjoy'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    
    client.messages
      .create({
         body: `Welcome ${req.body.first_name} ${req.body.last_name} back to Airbnb. Rooms at your fingertips`,
         from: '+12078020196',
         to: `+14373881668`
       })
      .then(message => {
        console.log(message.sid);
        res.render("welcome");
      })
      .catch((err)=>{
          console.log(`Error ${err}`);
      })
      
  }
    


});

module.exports=router;