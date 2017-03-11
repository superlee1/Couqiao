var express = require('express');
var router = express.Router();

/*  page. */
router.get('/', function(req, res, next) {
  // do something
  console.log('here');
  res.sendFile('/home/chaoli/website-beta1.0/app/new_app/public/index.html');
});
router.get('/:index', function(req, res, next) {
  // do something
  // res.render('index');
  console.log(req.params.index);
});
/*
 router.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: 'yourPathToIndexDirectory'
  });
 });

*/

module.exports = router;
