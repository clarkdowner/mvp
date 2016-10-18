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

  .factory('Items', function($http) {

    var allItems = function() {
      return $http({
        method: 'GET',
        url: '/',
      })
      .then(function(resp) {
        console.log('resp: ', resp);
        return resp.data;
      });
    };
      // return [
      //   {category: 'Produce', name: 'bananas', carted: false}, 
      //   {category: 'Produce',name: 'spinach', carted: false}, 
      //   {category: 'Produce',name: 'bread', carted: false},
      //   {category: 'Dairy',name: 'milk', carted: false},
      //   {category: 'Dairy',name: 'yogurt', carted: false},
      //   {category: 'Meats',name: 'eggs', carted: false},
      //   {category: 'Misc', name: 'tupperware', carted: false}
      // ];
    // };

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

    var addItem = function(itemObj) {
      console.log('+++++++++++++++++');
      return $http({
        method: 'POST',
        url: '/',
      })
      .then(function(resp) {
        console.log('post req!!!!!!!!!!!!!!!');
      });
    };

    return {
      allItems: allItems,
      categoryItems: categoryItems
    }

  })



