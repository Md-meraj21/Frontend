const mongoose = require('mongoose');
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const Chat = require("./models/chat");
const methodoverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));

main().then(() => {
    console.log("connection successful");
})
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

app.listen(port, () => {
    console.log(`app listening post ${port}`);
})

app.get("/", (req, res) => {
    res.send("Working");
})

app.get("/chats", async (req, res) => {
    let chat = await Chat.find();
    // console.log(chat);
    res.render("index.ejs", { chat });
})

app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let chatss = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    chatss.save().then((res) => {
        console.log("Data Saved");
    })
        .catch((err) => {
            console.log("some errors FInding");
        })
    res.redirect("/chats");
})

app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

//Edit Route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
})

//Update Route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newmsg } = req.body;
    await Chat.findByIdAndUpdate(id,
        { msg: newmsg },
        { runvalidaters: true, new: true });
    res.redirect("/chats");
})

//Distroy Route
app.delete("/chats/:id", async (req,res) => {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");

})