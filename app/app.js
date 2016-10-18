// var _ = require('underscore');


angular.module('groceryShopper', ['ngRoute'])

  // ADD ROUTES IF TIME
  // .config(['$routeProvider', function($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: '/all.html',
  //       controller: 'AllItemsCtrl'
  //     });
  // }])

  .factory('Items', function() {

    var allItems = function() {
      return [
        {category: 'Produce', name: 'bananas', carted: false}, 
        {category: 'Produce',name: 'spinach', carted: false}, 
        {category: 'Produce',name: 'bread', carted: false},
        {category: 'Dairy',name: 'milk', carted: false},
        {category: 'Dairy',name: 'yogurt', carted: false},
        {category: 'Meats',name: 'eggs', carted: false}
      ];
    };

    var categoryItems = function(category) {
      var categoryArray = [];
      var allItems = this.allItems();
      for (var i = 0; i < allItems.length; i++) {
        if (allItems[i].category === category) {
          categoryArray.push(allItems[i]);
        }
      }
      return categoryArray;
    };

    return {
      allItems: allItems,
      categoryItems: categoryItems
    }

  })

  .controller('ProduceCtrl', function($scope, Items) {
    $scope.category = 'Produce';
    $scope.items = Items.categoryItems('Produce');
    $scope.newItem = '';

    $scope.addItem = function(itemToAdd) {
      $scope.items.push({category: 'Produce', name: itemToAdd, carted: false});
      $scope.newItem = '';
    }

    $scope.removeAllFromCategory = function() {
      $scope.items = [];
    }
  })

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
  })

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
  })


