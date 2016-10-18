var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Item = require('./models/itemModel');


var app = express();
mongoose.connect('localhost:27017/shopper');

//not hitting this at all??
console.log('==========================');

var getItems = function(cb) {
	db.items.find(function(err, items) {
		if (err) {
			console.log(err);
			cb(err);
		} else {
			cb(null, items);
		}
	})
};

router.get('/', function(req, res) {
  getItems(function(err, items) {
    res.render('../app/index.html');
  })
});

// app.get('/', function (req, res) {
// 	Item.find()
// 		.then(function(err, items) {
// 	  	res.send(items);		
// 		})
// });


// app.get('/produce', function (req, res) {
// 	Item.find({category: 'Produce'}, function(err, items) {
// 		res.send(items);
// 	})
// })

// app.post('/', function(req, res) {
// 	new Item({category: req.category, name: req.name, carted: false}).save();
// })


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
module.exports = router;