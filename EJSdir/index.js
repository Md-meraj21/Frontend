const express = require("express");
const app = express();
const port =3000;
const path = require("path");

// This is constant path
app.set("views" ,path.join(__dirname, "/views"));
app.set("view engine","ejs");

app.get("/",(req,res)=> {
    res.render("home.ejs");
});


app.get("/rolldice",(req,res)=> {
    let value = Math.floor(Math.random()*6) +1;
    res.render("rolldice.ejs", {num : value});
});

//instagram
app.get("/ig/:username",(req,res)=> {
    const followers = ["Soni","Sona","Nida","Priya"];
    let {username} = req.params;
    res.render("instagram.ejs",{username , followers});
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});