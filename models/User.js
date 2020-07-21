var mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  name: String,
  city: String
});

module.exports = mongoose.model("User", userSchema);