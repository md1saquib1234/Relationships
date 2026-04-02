const mongoose = require("mongoose");
const { Schema } = mongoose;


main()
   .then(() => console.log("connection successful"))
   .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationDemo');
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
    ref: "User"
  }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//   let user = await User.findOne({username: "rahulkumar"});

//   let post2 = new Post({
//     content: "Bye Bye",
//     likes: 23,
//   });

//   post2.user = user;


//   await post2.save();
// };

// addData();

const del = async () => {
  await Post.findByIdAndDelete('69b93e081a278f8a16787906');
  await User.findByIdAndDelete('69ce3b4ac053236d37d3bf06');

};

del();