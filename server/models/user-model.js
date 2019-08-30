const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  googleId: String,
  thumbnail: String,
  email: String,
  balance: Number,
  rbxuser: String,
  xp: Number,
  level: Number,
  refid: String,
  refused: String,
  creation: Number
});

const User = mongoose.model('user', userSchema);

module.exports = User;
