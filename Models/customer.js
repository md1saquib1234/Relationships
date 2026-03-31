const mongoose = require('mongoose');
const {Schema} = mongoose;


main().
 then(console.log("Connection successful")).catch(err => console.log(err));

 async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationDemo');
}

const orderSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});