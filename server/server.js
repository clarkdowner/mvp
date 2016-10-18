var express = require('express');
var mongoose = require('mongoose');
var appRoot = require('app-root-path');
var router = express.Router();
var Item = require('./items/itemModel');


var app = express();
mongoose.connect('localhost:27017/shopper');

// app.use(express.static(__dirname + '/app'));


app.get('/', function(req, res) {
	res.sendFile(appRoot + '/app/index.html');
	// res.sendfile(path, {'root': '/path/to/root/directory'});
})
// var getItems = function(cb) {
// 	db.items.find(function(err, items) {
// 		if (err) {
// 			console.log(err);
// 			cb(err);
// 		} else {
// 			cb(null, items);
// 		}
// 	})
// };

// app.get('/', function(req, res) {
// // console.log('==========================');
// //   getItems(function(err, items) {
// //     res.send(items);
//   // })
// });

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