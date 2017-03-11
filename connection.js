// connect to database
var mongoose = require('mongoose');

console.log('-----------------------Connecting to database-----------------------');
mongoose.connect('mongodb://localhost/website_development');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error : '));
db.once('open', function(){
    console.log('***************************Connected*****************************');
});

module.exports = mongoose;
