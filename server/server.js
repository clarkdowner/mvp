var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var app = express();
app.use(express.static(__dirname + './../app'));
app.use(bodyParser.urlencoded({extended: true}));


// Connect to Mongoose
mongoose.connect('mongodb://localhost:27017/shopper', function(err, database) {
  if (err) {
    console.log(err);
  }
  app.listen(3000, function () {
    console.log('Listening on port 3000!');
  });
});

// // Mongoose Schema
// var GrocerySchema = new mongoose.Schema({
//   category: {type: String, required: true},
//   name: {type: String, required: true},
//   carted: Boolean
// });

// // Item Model
// var Item = mongoose.model('Item', GrocerySchema);

var db;

app.get('/', function(req, res) {
  console.log('98787888888888 inside get from server')
  db.collection('items').find().toArray(function(err, res) {  
    if (err) {
      console.log(err)
      
    } 
    for (var i = 0; i < res.length; i++) {
      delete res[i]._id;
      delete res[i].__v;
    }
    console.log(res);
  });
  res.sendFile(__dirname + './../app/index.html');
})

app.post('/', function(req, res) {
  db.collection('items').save(req.body, function(err, res) {
    if (err) {
      console.log(err);
      return;
    }
  console.log('saved to database');
  // res.redirect('/');
  })
})




// Don't burn just yet

/*
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var appRoot = require('app-root-path');

//var Item = require('./items/itemModel');


var app = express();

app.use(express.static(__dirname + './../app'));
app.use(bodyParser.urlencoded({extended: true}));


// Connect to Mongoose
mongoose.connect('mongodb://localhost:27017/shopper', function(err) {
  if (err) {
    console.log(err);
  }
  app.listen(3000, function () {
    console.log('Listening on port 3000!');
  });
});

// Mongoose Schema
var GrocerySchema = new mongoose.Schema({
  category: {type: String, required: true},
  name: {type: String, required: true},
  carted: Boolean
});

// Item Model
var Item = mongoose.model('Item', GrocerySchema);

// app.post('/', function(req, res) {
//   console.log('==================',req.body);
// })

app.get('/', function(req, res) {
  console.log('up in here');
})

app.post('/', function(req, res) {
 new Item({category: req.category, name: req.name, carted: false}).save();
})

// app.get('/', function(req, res) {
//  console.log('res', res);
//  res.sendFile(appRoot + '/app/index.html');
//  // Item.db.collection('shopper').find().toArray(function(err, res) {
//  //  console.log(res)
//  // });
// })
// var getItems = function(cb) {
//  db.items.find(function(err, items) {
//    if (err) {
//      console.log(err);
//      cb(err);
//    } else {
//      cb(null, items);
//    }
//  })
// };

module.exports = app;

*/