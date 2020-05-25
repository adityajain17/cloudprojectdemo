var express=require("express")
const path = require('path')
var app=express()
const PORT = process.env.PORT || 5000
app.set('views',path.join(__dirname,'views'));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.get("",function(req,res)
{
    res.render("pages/home");
});
app.listen(PORT,function()
{
    console.log("Server Up and Running ");
});