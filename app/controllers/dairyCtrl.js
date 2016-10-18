angular.module('shopper.dairy', [])

  .controller('DairyCtrl', function($scope, Items) {
    $scope.category = 'Dairy';
    $scope.items = Items.categoryItems('Dairy');
    $scope.newItem = '';

    $scope.addItem = function(itemToAdd) {
      $scope.items.push({category: 'Dairy', name: itemToAdd, carted: false});
      $scope.newItem = '';
    }

    $scope.removeAllFromCategory = function() {
      $scope.items = [];
    }
  });