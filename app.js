const express = require("express")
const bodyparser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.set("views engine", "ejs");
app.use(bodyparser.urlencoded({extends: true}));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.use("/register", function(req, res){
    res.render("register");
});

app.listen(3000, function(){
    console.log("server started successfully on port 3000");
})