const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require("dotenv").config({path:'./config/keys.env'});


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

app.use("/",indexController);
app.use("/room-listing",roomController);
app.use("/login",loginController);
app.use("/signup",signupController);
app.use("/welcome",welcomeController);





mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING , {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Connected to MongoDB Database`);
})
.catch(err=>console.log(`Error occured when connecting to database ${err}`));





const PORT = process.env.PORT;
app.listen(PORT,()=>{
console.log(`web serve is up and running`);
})