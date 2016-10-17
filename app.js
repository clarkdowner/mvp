angular.module('groceryShopper', [])

  .controller('Produce', function($scope) {
    $scope.category = 'Produce';
    $scope.items = [{name: 'bananas', carted: false}, {name: 'spinach', carted: false}, {name: 'bread', carted: false}];
    $scope.newItem = ''

    $scope.addItem = function(itemToAdd) {
      $scope.items.push({name: itemToAdd, carted: false});
      $scope.newItem = '';
    }

    $scope.removeAllFromCategory = function() {
      $scope.items = [];
    }

    // $scope.onLoad = function() {
    //   Items.getAll().then(function(resp) {
    //     $scope.data.items = resp;
    //   }).
    // }

    // $scope.onLoad();
  })

