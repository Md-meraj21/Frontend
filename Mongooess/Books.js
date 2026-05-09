const mongoose = require('mongoose');

main().then(() => {
    console.log("connection successful");
})
    .catch((err) => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Books");
}

const booksschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1,"Itna Sasta nhi bechna tha "],
    },
});

const Book = mongoose.model("Book",booksschema);

let book1 = new Book({
    title:"Science",
    author:"Alert Eistien",
    price:200,
});
book1.save().then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.errors.price.properties.message);
});