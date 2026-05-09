const mongoose = require("mongoose");
const { Schema } = mongoose;


main().then(() => {
    console.log("Connection successfully");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/RelationshipDemo');
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            location: String,
            city: String
        },
    ],
})

const User = mongoose.model("User", userSchema);

const adduser = async () => {
    const user1 = new User({
        username: "Merajan4536H",
        addresses: [{
            location: "Chapra,Bihar(Saran)",
            city: "Patna",
        }],
    })
    user1.addresses.push({
        location:"Basantpur Bangla",
        city: "Amnour",
    })
    let result = await user1.save();
    console.log(result);
};

adduser();