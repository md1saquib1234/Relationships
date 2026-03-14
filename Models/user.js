const mongoose = require('mongoose');


main().then(console.log("Connection successful")).catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationDemo');
}