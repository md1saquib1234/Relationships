const mongoose = require('mongoose');
const Schema = mongoose.Schema;


main().then(console.log("Connection successful")).catch(err => console.log(err));



async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationDemo');
}

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      location: String,
      city : String,
    }
  ]
})