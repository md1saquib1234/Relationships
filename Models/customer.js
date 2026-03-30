const mongoose = require('mongoose');
const {Schema} = mongoose;

 async function main() {
  try {
  await mongoose.connect('mongodb://localhost:27017/relationDemo');
  console.log("Connection successful");

  await addOrders();

  } catch (err) {
    console.log("Error: ", err);
  }
  
}

main();

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  price: Number,
}); 

const Order = mongoose.model('Order', orderSchema);

// const addOrders = async () => {
//   let res = await Order.insertMany([
//   { item: "Samosa", price: 10},
//   { item: "Chips", price: 10},
//   { item: "Chocolate", price: 40}
//   ]);
//   console.log(res);
// };

