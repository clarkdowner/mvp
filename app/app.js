
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
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .otherwise('/');
  }])

  .factory('Items', ['$http', function($http) {

    var allItemsReq = function() {
      return $http({
        method: 'GET',
        url: '/'
      }).then(function(resp) {
        console.log('resp: //////////////////// ', resp.data);
        return resp.data;
      })
    };

    var categoryItems = function(category) {
      var categoryArray = [];
      var allItems = this.allItemsReq();
      for (var i = 0; i < allItems.length; i++) {
        if (allItems[i].category === category) {
          categoryArray.push(allItems[i]);
        }
      }
      return categoryArray;
    };

    return {
      allItemsReq: allItemsReq,
      categoryItems: categoryItems
    };

  }]);


    //DUMMY DATA
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
