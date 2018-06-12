var express = require ("express");
var app = express();

var port = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

var connection = require("./config/connection");


app.engine("handlebars", exphbs({defualtLayout: "main"}))
//refers to main I have in Layouts folder 

app.set("view engine", "handlebars")

app.get("/", function(req, res){
    
    connection.query("SELECT * FROM tacos", function(err, results){
        res.render("index",{items: results})
    })


})

app.listen(port)