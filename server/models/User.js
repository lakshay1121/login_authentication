const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  console.log("before hashing" , user.password);
  if(!user.isModified('password')){
    return next();
  }
  
  user.password = await bcrypt.hash(user.password, 8);
  console.log("after hashing" , user.password);
  next();
});
mongoose.model("User", userSchema);
