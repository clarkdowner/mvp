angular.module('shopper.misc', [])

  .controller('MiscCtrl', function($scope, Items) {
    $scope.category = 'Misc';
    $scope.items = Items.categoryItems('Misc');
    $scope.newItem = '';

    $scope.addItem = function(itemToAdd) {
      $scope.items.push({category: 'Misc', name: itemToAdd, carted: false});
      $scope.newItem = '';
    }

    $scope.removeAllFromCategory = function() {
      $scope.items = [];
    }
  });