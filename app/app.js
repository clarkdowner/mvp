// var _ = require('underscore');


angular.module('groceryShopper', ['ngRoute'])


  // Add routes later if time
  // .config(['$routeProvider', function($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: '/all.html',
  //       controller: 'AllItemsCtrl'
  //     });
  // }])

  .factory('Items', function() {
    return [
      {category: 'Produce', name: 'bananas', carted: false}, 
      {category: 'Produce',name: 'spinach', carted: false}, 
      {category: 'Produce',name: 'bread', carted: false},
      {category: 'Dairy',name: 'milk', carted: false},
      {category: 'Dairy',name: 'yogurt', carted: false},
      {category: 'Meats',name: 'eggs', carted: false}
    ];
  })

  .controller('ProduceCtrl', function($scope, Items) {
    $scope.category = 'Produce';
    $scope.items = Items;
    $scope.newItem = '';

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

  .controller('DairyCtrl', function($scope, Items) {
    $scope.category = 'Dairy';
    $scope.items = Items;
    $scope.newItem = '';

    $scope.addItem = function(itemToAdd) {
      $scope.items.push({name: itemToAdd, carted: false});
      $scope.newItem = '';
    }

    $scope.removeAllFromCategory = function() {
      $scope.items = [];
    }
  })



