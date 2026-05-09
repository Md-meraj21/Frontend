const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(() => {
    console.log("connection successful");
})
    .catch((err) => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

//for print 
// User.find({ age : { $gt: 20 }}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// User.findById('69230a06ab3d41304f20919e')
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


// User.findOneAndUpdate({name:"mwer Meraj Ansari"}, {age:34})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

User.deleteMany({name:"mwer Meraj Ansari"})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

User.insertMany([
    {
        name: "mwer Meraj Ansari",
        email: "mdmerajansari975@gmail.com",
        age: 21
    },
    {
        name: "Md Meraj Ansari",
        email: "mdmerajansari75@gmail.com",
        age: 12
    }
]) 
// .then((res) => {
//     console.log(res);
// })

// const user1 = new User({
//     name: "Meraj Ansari",
//     email: "mdmerajansari975@gmail.com",
//     age: 21
// });
// user1.save().then(res => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err);
// });
