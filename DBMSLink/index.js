const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodoverride = require("method-override");

app.use(methodoverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({ //connection build for mysql through mysql2
    host: 'localhost',
    user: 'root',
    database: 'store',
    password: "9852"
});


let data = [];

let createRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ]
};

// connection.end();   //ye database ke connection ko khatam kar deta hai

let port = 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, [data], (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        })
    } catch (err) {
        console.log(err);
        res.send("some Err of DB");
    }
});

app.get("/user", (req, res) => {

    let q = `SELECT * FROM user`;
    try {
        connection.query(q, [data], (err, users) => {
            if (err) throw err;
            res.render("showusers.ejs", { users });
        })
    } catch (err) {
        console.log(err);
        res.send("some Err of DB");
    }
});

//edit from 
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id ='${id}'`;
    try {
        connection.query(q, [data], (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send("Sorry DB mistake");
    }
});

//update from user
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formpass, username: newusername } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
        connection.query(q, [data], (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formpass != user.password) {
                res.send("Wrong password");
            }
            else {
                let q2 = `UPDATE user SET username='${newusername}' WHERE id='${id}'`;
                connection.query(q2, [data], (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                })
            }
        })
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");

    }
});

//DELETE from user 
app.delete("/user/:id",(req,res) => {
    let { id } = req.params;
    let q = `DELETE FROM user WHERE id=?`;
    connection.query(q,[id],(err,result) => {
        if(err) throw err;
        res.redirect("/user");
    })
});

app.get("/user/new",(req,res) => {
    res.render("new.ejs");
});

app.post("/user",(req,res) => {
    let { username , email , password } = req.body;
    let id = faker.string.uuid();
    let q = `INSERT INTO user (id,username,email,password) VALUES(?,?,?,?)`;
    connection.query(q,[id,username,email,password],(err,result)  => {
        if(err) throw err;
        res.redirect("/user");
    })
});

app.get("/user/search",(req,res) => {
    let { query } = req.query;
    let q = `SELECT * FROM user WHERE username LIKE ? OR email LIKE ?`;
    let searchterm = `%${query}%`;

    connection.query(q,[searchterm , searchterm],(err,users) => {
        if(err) throw err;
        res.render("showusers.ejs",{ users });
    })
})