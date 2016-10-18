angular.module('shopper.grains', [])

  .controller('GrainsCtrl', function($scope, Items) {
    $scope.category = 'Grains';
    $scope.items = Items.categoryItems('Grains');
    $scope.newItem = '';

    $scope.addItem = function(itemToAdd) {
      $scope.items.push({category: 'Grains', name: itemToAdd, carted: false});
      $scope.newItem = '';
    }

    $scope.removeAllFromCategory = function() {
      $scope.items = [];
    }
  });