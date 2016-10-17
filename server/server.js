var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


//---------

app.route('/')
	.get(function(req, res) {
		res.send('All the user data back')  // add logic
	})
	.post(function(req, res) {
		res.send('adding new item') // and add logic
	});