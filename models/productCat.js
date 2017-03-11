var mongoose = require('../connection');
var Schema = mongoose.Schema;
var productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  src: {
    type: String,
    required: true
  },
  something1:
  {
    type: String
  },
  something2:
  {
    type: String
  }
  // more registration infos to be added
});

// declare methods for model of products
/*
productSchema.methods.speak = function () {
var greeting = this.name
  ? "Meow name is " + this.name
  : "I don't have a name";
console.log(greeting);
}
*/
module.exports = mongoose.model('product', productSchema);
