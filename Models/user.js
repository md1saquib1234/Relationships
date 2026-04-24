const mongoose = require('mongoose');
const Schema = mongoose.Schema;


main().
 then(console.log("Connection successful")).catch(err => console.log(err));

 async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationDemo');
}


// Define the User schema with an array of addressess
const userSchema = new Schema({
  username: String,
  addresses: [
    { 
      _id: false,
      location: String,
      city : String,
    },
  ],
});

const User = mongoose.model('User', userSchema);

const addUsers = async () => {
  let user1 = new User(
    {
      username: "John Doe",
      addresses: [
        {
          
          location: "123 Main st",
          city: "London"
        }
      ] 
    })

    user1.addresses.push({
      location: "456 Main st",
      city: "Paris"
    });

    await user1.save();
    let result = await user1.save();
    console.log(result);

}


addUsers();

