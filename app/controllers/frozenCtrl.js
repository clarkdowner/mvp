angular.module('shopper.frozen', [])

  .controller('FrozenCtrl', function($scope, Items) {
    $scope.category = 'Frozen';
    $scope.items = Items.categoryItems('Frozen');
    $scope.newItem = '';

    $scope.addItem = function(itemToAdd) {
      $scope.items.push({category: 'Frozen', name: itemToAdd, carted: false});
      $scope.newItem = '';
    }

    $scope.removeAllFromCategory = function() {
      $scope.items = [];
    }
  });