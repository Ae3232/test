var app = angular.module("testTask", []);

app.controller('SimpleArrayCtrl', ['$scope', function SimpleArrayCtrl($scope) {

  // Fruits
  $scope.fruits = ['fruit1', 'fruit2', 'fruit3', 'fruit4'];

  // Selected fruits
  $scope.selection = {
  			"fruit1" : true,
			"fruit4" : true,
			"fruit2" : false
  }

  // Toggle selection for a given fruit by name
  $scope.toggleSelection = function toggleSelection(fruitName) {
    var idx = $scope.selection.indexOf(fruitName);

    // Is currently selected
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }

    // Is newly selected
    else {
      $scope.selection.push(fruitName);
    }
  };
  $scope.filterFruit  = function(fruit) {
       var displayFruit;
       displayFruit =  $scope.toggleSelection[fruit.fruitName] || noFilter($scope.toggleSelection);    
       return displayFruit;
   };
   function noFilter(filterObj) {
      return Object.
        keys(filterObj).
        every(function (key) { return !filterObj[key]; });
    }
}]);

