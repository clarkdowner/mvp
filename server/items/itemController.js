var Q = require('q');
var Item = require('./itemModel.js');

// var findAll = Q.nbind(Item.find, Item);
// var addNew = Q.nbind(Item.create, Item);

module.exports = {

	getAllItems: function(req, res, next) {
		findAll({})
			.then(function(items) {
				res.json(items);
			})
			.fail(function (err) {
				next(err);
			});
	},

	addNewItem: function(req, res, next) {

	},

	clearAllItems: function(req, res, next) {

	}

}