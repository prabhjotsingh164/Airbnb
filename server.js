const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();


//This allows express to make staic content available from the public
app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

const indexController = require("./controllers/index");
const roomController = require("./controllers/rooms");
const loginController = require("./controllers/login");
const signupController = require("./controllers/signup");
const welcomeController = require("./controllers/welcome");
//This tells express to set and register handlebars as its template/viewengine
// app.get("/",(req,res)=>{
// res.render("index",{
//     title:"Home",
//     headinginfo: "Home Page",
//     randomContent:"AAAAAAAAAAAAA"
// })
// });
app.use("/",indexController);
app.use("/room-listing",roomController);
app.use("/login",loginController);
app.use("/signup",signupController);
app.use("/welcome",welcomeController);




// app.get("/welcome",(req,res)=>{
//     res.render("welcome",{
//         title:"Welcome",
//         headinginfo: "Welcome",
        
//     })
// });






const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
console.log(`web serve is up and running`);
})