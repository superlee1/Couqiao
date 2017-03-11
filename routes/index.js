var express = require('express');
var router = express.Router();
var assert = require('assert');
var Product = require('../models/product');
// var User = require('../models/users');
/*
router.get('/selectProduct', function(req, res) {
  console.log('there');
});
*/

/* GET home page. */
// Retrive data from database
router.get('/', function(req, res){
  Product.find({}, function(err, products){
    console.log(err);
    // pass device type to frontend(AngularJs)
    // products.push({'deviceIndicator': req.device.type});
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(products));
    console.log('***********************Products data sent***************************');
    // res.json(prodArray);
  });
/*
  //  I am storing data for products into database......
  var fluffy = new Product({
    name: '小雏菊护手霜',
    type: '小雏菊/护手霜/皮肤/护理',
    price: 45,
    description: '德国经典护手霜',
    src: '../images/products/ruta_kamile.png'
  });
  var fluffy1 = new Product({
    name: '芭乐雅玻尿酸',
    type: '芭乐雅/玻尿酸/皮肤/护理',
    description: '提拉紧致保湿浓缩精华',
    price: 50,
    src: '../images/products/lifting_kur.png'
  });
  var fluffy2 = new Product({
    name: '婴儿推车',
    type: '婴儿/推车',
    description: '德国婴儿推车',
    price: 2999,
    src: '../images/products/baby_cart01.png'
  });
  var fluffy3 = new Product({
    name: '爽健足部护理霜',
    type: '脚霜/护理霜/足部/爽健',
    description: '软化护理足部干燥皮肤',
    price: 15,
    src: '../images/products/fusscreme.png'
  });
  // mpromise is deprecated, need to build own promise
  fluffy3.save(function (err, fluffy2) {
  if (err) return console.error(err);
});
  fluffy2.save(function (err, fluffy2) {
  if (err) return console.error(err);
});
fluffy1.save(function (err, fluffy1) {
if (err) return console.error(err);
});
fluffy.save(function (err, fluffy) {
if (err) return console.error(err);
});
*/
// findAndModify
});

module.exports = router;
