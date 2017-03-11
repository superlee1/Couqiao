var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bycript = require('bcrypt');

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userId: Schema.ObjectId,
  gender: String,
  weChat: String,
  // more registration info to be added
});

userSchema.methods.createUser = function (user) {
  user.save();
};

module.exports = mongoose.model('User', userSchema);
