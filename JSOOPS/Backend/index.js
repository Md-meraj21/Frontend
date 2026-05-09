const express = require("express");
const app = express();
const port = 8080;

//incoded data to read karne ke lia 
app.use(express.urlencoded({extended:true}));
//Agar json file ko padhna ho to
app.use(express.json());

app.listen(port , ()=> {
    console.log(`listening to port ${port}`);
});

app.get("/register",(req,res)=> {
    let {user,password} = req.query;
    res.send(`Standard get reponse is ${user}`);
    
})

//post ke aandar data body me aata hai
app.post("/register", (req,res) =>{
   let {user,password} = req.body;
    res.send(`Standard post reponse is ${user}`);
});

