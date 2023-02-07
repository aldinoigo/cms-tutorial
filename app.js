//importing modules

const {globalVariables} = require("./config/configuration")

const express = require("express");
const mongoose = require ("mongoose");
const path = require ("path");
const hbs = require("express-handlebars");
const {mongoDbUrl, PORT,} = require("./config/configuration");
const flash = require ("connect-flash")
const session = require("express-session")

const app =express();

//configure mongoose to connect mongodb

mongoose.connect(mongoDbUrl, {useNewUrlParser : true})
    .then(response =>{
        console.log("mongodb Connected succesfully");
    }).catch(err => {
        console.log("database connect is failed")
    });

//configure express
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

//flash and session
app.use(session({
    secret : "anysecret",
    saveUninitialized : true,
    resave :true
}));
app.use(flash())
app.use(globalVariables)

//setup view engines to use handlebars
app.engine("handlebars", hbs.engine({defaultLayout: 'default', runtimeOptions: {allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true},}));
app.set("view engine", "handlebars");

//routes
const defaultRoutes = require ("./routes/defaultRoutes");
const adminRoutes = require ("./routes/adminRoutes");
app.use ("/", defaultRoutes);
app.use ("/admin", adminRoutes);


app.listen (PORT, ()=> {
    console.log(`server running on port ${PORT}`)
});