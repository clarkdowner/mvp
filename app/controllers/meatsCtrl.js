angular.module('shopper.meats', [])

  .controller('MeatsCtrl', function($scope, Items) {
    $scope.category = 'Meats';
    $scope.items = Items.categoryItems('Meats');
    $scope.newItem = '';

    $scope.addItem = function(itemToAdd) {
      $scope.items.push({category: 'Meats', name: itemToAdd, carted: false});
      $scope.newItem = '';
    }

    $scope.removeAllFromCategory = function() {
      $scope.items = [];
    }
  });