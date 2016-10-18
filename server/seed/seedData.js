var Item = require('../models/itemModel');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopper');

var items = [
	new Item(
		{category: 'Produce', name: 'bananas', carted: false}
	),
	new Item(
		{category: 'Produce',name: 'spinach', carted: false}
	),
	new Item(
		{category: 'Produce',name: 'bread', carted: false}
	),	
	new Item(
		{category: 'Dairy',name: 'milk', carted: false}
	),
	new Item(
		{category: 'Dairy',name: 'yogurt', carted: false}
	),
	new Item(
		{category: 'Meats',name: 'eggs', carted: false}
	)
];


var done = 0;
for (var i = 0; i < items.length; i++) {
	items[i].save(function(err, result) {
		if (err) {
			console.log(err);
		}
		done++;
		if (done === items.length) {
			mongoose.disconnect();
		}
	});
}






