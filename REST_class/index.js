const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodoverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodoverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "mdmeraj",
        content: "Happy life, Happy mood",
    },
    {
        id: uuidv4(),
        username: "Rajan",
        content: "Lazy is best workout",
    },
    {
        id: uuidv4(),
        username: "sahil",
        content: "SAhila khatun",
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    // res.send("Post added successfully!");
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
    // res.send("Server is working");
})

app.patch("/posts/:id",(req,res) => {
    let { id } = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p)=> p.id=== id);
    post.content = newcontent;
    // console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id );
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id", (req,res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("Successful");
    res.redirect("/posts");
});

app.get("/", (req, res) => {
    res.send("Service working well !");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
