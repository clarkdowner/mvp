//https://www.terlici.com/2015/04/03/mongodb-node-express.html

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

/*

//create banana in db
var banana = new Item({category: 'Produce', name: 'banana', carted: false});

//save to database
banana.save(function(err) {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log(banana)
	}
})

//queries:
//find all items
Item.find(function (err, items) {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log(items);
	}
});

//find all produce
Item.find({category: 'Produce'}, function(err, items) {
	if (err) {
		console.log(err);
	} else {
		console.log(items);
	}
});

//delete all produce
Item.remove({category: 'Produce'}, function(err, items) {
	if (err) {
		console.log(err);
	} else {
		console.log(items);
	}
});

*/