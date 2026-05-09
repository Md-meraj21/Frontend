const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection successfully"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/RelationshipDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order", // must match model name
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addOrder = async () => {
  let res = await Order.insertMany([
    { item: "Biryani", price: 200 },
    { item: "Halwa", price: 20 },
    { item: "Banana", price: 10 },
    { item: "Pineapple", price: 30 },
  ]);
  console.log("Orders added:", res);
};
// addOrder();

const COrder = async () => {
  // Example: create a customer and link orders
  // let cust1 = new Customer({ name: "Md Meraj Ansari" });
  // let order1 = await Order.findOne({ item: "Banana" });
  // let order2 = await Order.findOne({ item: "Pineapple" });
  // cust1.orders.push(order1._id);
  // cust1.orders.push(order2._id);
  // await cust1.save();

  // Now fetch customers with populated orders
  let res = await Customer.find({}).populate("orders");
  console.log(res);
};

// COrder();

const addcust = async () => {
    let newcust = new Customer({
      name: "Rajni Kr. Shinghaniya"
    });
    let newOrder = new Order({
      item:"Biryani Haidrabadi",
      price:200
    });

    newcust.orders.push(newOrder);
    await newOrder.save();
    await newcust.save();

};

// addcust();

const delcust = async () => {
  let del = await Customer.findByIdAndDelete("6988bee2bb4620db56be55d1");
  console.log(del);
}
delcust();
