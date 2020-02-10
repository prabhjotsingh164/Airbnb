const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

//This allows express to make staic content available from the public
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//This tells express to set and register handlebars as its template/viewengine
app.get("/",(req,res)=>{
res.render("index",{
    title:"Home",
    headinginfo: "Home Page",
    randomContent:"AAAAAAAAAAAAA"
})
});

app.get("/room-listing",(req,res)=>{
    res.render("roomlisting",{
        title:"Room Listings",
        headinginfo: "Room Listing",
        
    })
});
// app.get("/sendMessage",(req,res)=>{
//     res.render("form",{
//         title:"SMS Page"
//     });
    
// });


// app.post("",(req,res)=>{
//     const errors= [];
//     if(req.body.phoneNo=="")
//   {
//     errors.push("Sorry, you must enter a phone number");

//   }

//   if(req.body.message=="")
//   {
//     errors.push("Sorry, youmust enter a  message")
//   }
//   if(req.body.uname=="")
//   {
//       errors.push("enter the username")
//   }


//   if(errors.length > 0)
//   {
//     res.render("form",{
//       messages : errors
//     })
//   }
//   else
//   {
//     const accountSid = 'PUT YOUR ACCOUNT SID HERE';
//     const authToken = 'PUT HERE YOUR AUTHTOKEN HERE';
//     const client = require('twilio')(accountSid, authToken);
    
//     client.messages
//       .create({
//          body: `${req.body.firstName} ${req.body.lastName} Message :${req.body.message}`,
//          from: 'PUT YOUR TRIAL NUMBER HERE',
//          to: `${req.body.phoneNo}`
//        })
//       .then(message => {
//         console.log(message.sid);
//         res.render("home");
//       })
//       .catch((err)=>{
//           console.log(`Error ${err}`);
//       })

//   }
    


// });
const PORT = 3000;
app.listen(3000,()=>{
console.log(`web serve is up and running`);
})