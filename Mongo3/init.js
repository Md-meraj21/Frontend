const mongoose = require("mongoose");
const Chat = require("./models/chat");

main().then(() => {
    console.log("connection successful");
})
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

let newchat = ([
    {
        from: "Sona",
        to: "Meraj",
        msg: "I Love You",
        created_at: new Date(),
    },
    {
        from: "Priya",
        to: "Meraj",
        msg: "I hate you",
        created_at: new Date(),
    },
    {
        from: "Nida",
        to: "Meraj",
        msg: "Why are you leave me",
        created_at: new Date(),
    }
])

Chat.insertMany(newchat);