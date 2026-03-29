const mongoose = require('mongoose');
const Schema = mongoose.Schema;



main().
 then(console.log("Connection successful")).catch(err => console.log(err));

 async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationDemo');
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const Order = mongoose.model('Order', orderSchema);

const addOrders = async () => {
  let res = await Order.insertMany(
  { item: "Samosa", price: 10},
  { item: "Chips", price: 10},
  { item: "Chocolate", price: 40}
  );
  console.log(res);
};