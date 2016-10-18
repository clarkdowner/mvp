// var _ = require('underscore');


angular.module('groceryShopper', [
  'shopper.produce',
  'shopper.dairy',
  'shopper.meats',
  'shopper.grains',
  'shopper.frozen',
  'shopper.misc',
  'ngRoute'
])

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
        {category: 'Meats',name: 'eggs', carted: false},
        {category: 'Misc', name: 'tupperware', carted: false}
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



