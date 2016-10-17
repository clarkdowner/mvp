angular.module('groceryShopper.services', [])

.factory('Items', function ($http) {

	var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api',
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var addItem = function(item) {
    return $http({
      method: 'POST',
      url: '/api',
      data: item
    });
  };

  return {
    getAll: getAll,
    addOne: addItem
  }
})