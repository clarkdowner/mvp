var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected via mongoose!');
});


var GrocerySchema = new mongoose.Schema({
	category: {type: String, required: true},
	name: {type: String, required: true},
	carted: Boolean
});

var Item = mongoose.model('Item', GrocerySchema);

module.exports = Item;
module.exports = db;