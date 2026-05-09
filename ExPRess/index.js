const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})

app.get("/",(req,res)=> {
    res.send("Hey this is node");
});

app.get("/apple",(req,res)=> {
    res.send("This is the apple node");
});

app.get("/orange",(req,res)=> {
    res.send("This is the orange node");
});

// app.get("/:username/:id",(req,res)=> {
//     console.log(req.params);
//     res.send("This is the banana node");
// });

app.get("/:username/:id",(req,res)=> {
    let {username , id} = req.params;
    let code = `<h1>Hey, Welcome dear @${username} and your id is ${id}<\h1>`;
    res.send(code);
});

app.get("/search",(req , res) => {
    let {q} = req.query;
    
    if(!q) {
        res.send("No Any reponse");
    }
    res.send(`The resquest send is ${q}`);
});

// app.use((req, res) => {
// console.log ("request received");
// // res.send("This is basic response");
// let code = "<h1>Fruits </h1> <ul><li>Apple</li> <li>Orange</li> </ul>";
// res.send(code);
// });