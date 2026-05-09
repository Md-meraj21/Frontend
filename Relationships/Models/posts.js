const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("Connection successfully"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/RelationshipDemo");
}

const userSchema = new Schema({
    username: String,
    email: String
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const User = mongoose.model("User", userSchema);
const post = mongoose.model("post", postSchema);

const addData = async () => {
    let user1 = new User({
        username: "Jarem",
        email: "Jarem@gmail.com"
    })

    let post1 = new post({
        content:"How are you?",
        likes:21
    })

    post1.user= user1;

    let user11 = await user1.save();
    let post22 = await post1.save();
    console.log(user11);
    console.log(post22);

}
addData();


