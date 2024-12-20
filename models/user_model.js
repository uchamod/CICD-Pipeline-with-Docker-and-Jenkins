const mongoose = require("mongoose");

//defien mongo db schema
const UserModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  favouriteImgs: [
    {
      id: String,
      url: String,
      description: String,

      creator: String,
    },
  ],
});
//export user schema
const User = mongoose.model("User", UserModel);

module.exports = User;
