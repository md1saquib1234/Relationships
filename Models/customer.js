const mongoose = require('mongoose');
const {Schema} = mongoose;

 async function main() {
  try {
  await mongoose.connect('mongodb://localhost:27017/relationDemo');
  console.log("Connection successful");

  await addCustomer();

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
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order"
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);

const addCustomer = async () => {
  let order1 = await Order.findOne({item: "Chips"});
  let order2 = await Order.findOne({item: "Chocolate"});

  if (!order1 || !order2) {
    console.log("Orders not found, insert them first");
    return;
  }

  let customer1 = new Customer({
    name: "Rahul kumar",
    orders: [order1._id, order2._id]
  });

  let result = await customer1.save();
  let data = await Customer.find().populate("orders");
  console.log(JSON.stringify(data, null, 2));
};


  

// const addOrders = async () => {
//   let res = await Order.insertMany([
//   { item: "Samosa", price: 10},
//   { item: "Chips", price: 10},
//   { item: "Chocolate", price: 40}
//   ]);
//   console.log(res);
// };

