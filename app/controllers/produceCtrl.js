angular.module('shopper.produce', [])

  .controller('ProduceCtrl', function($scope, Items) {
    $scope.category = 'Produce';
    $scope.items = Items.categoryItems('Produce');
    $scope.newItem = '';

    $scope.addItem = function(itemToAdd) {
      Items.addItem({category: 'Produce', name: itemToAdd, carted: false});
      // $scope.items.push({category: 'Produce', name: itemToAdd, carted: false}); //<-- replace with ajax post
      $scope.newItem = '';
    }

    $scope.removeAllFromCategory = function() {
      $scope.items = [];
    }
  });