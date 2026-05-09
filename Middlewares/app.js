const express = require('express');
const app = express();
const ExpressError = require("./ExpressError");
let port = 8080;

app.get("/err",(req,res) => {
    abcg=abcg;
})

app.use((err,req,res,next) => {
    console.log("----------Error ----------")
    next(err);
})



// app.use("api",(req,res,next)=> {
//     let {token} = req.query;
//     if(token === "111") {
//         next();
//     }
//     res.send("Access Denied")
// })

//or
const cheak = (req,res,next)=> {
    let {token} = req.query;
    if(token === "111") {
        next();
    }
    res.send("Access Denied")
}
app.get("/api",cheak,(req,res) => {
    res.send("Data");
})

app.use("/random",(req,res,next) => {
    console.log("Hello Random");
    next();
})
app.use((req,res,err,next) => {
    let {status = 500,message = "SomeErrors"} = err;
    res.status(status).send(message);
})

app.get("/admin",(req,res) => {
    throw new ExpressError(403,"Access to admin is forbidden");
})

// app.use((req,res) => {
//     res.send("page naikhe");
// })
app.get('/', (req, res) => {
    res.send('Hello, World!');
});



app.listen(port,() =>{
    console.log(`Listen port is ${port}`);
})

