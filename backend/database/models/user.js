const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  password: String,
  email: { type: String, unique: true },
  avatar_url: { type: String },
});

module.exports = model("User", userSchema);
