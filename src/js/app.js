var app = angular.module("testTask", []);

app.controller('SimpleArrayCtrl', ['$scope', function SimpleArrayCtrl($scope) {

  // Fruits
  $scope.fruits = ['fruit1', 'fruit2', 'fruit3', 'fruit4'];

  // Selected fruits
  $scope.selection = ['fruit1', 'fruit4'];

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
  $scope.filterByCategory  = function(fruit) {
       var displayUser;
       displayUser =  $scope.toggleSelection; 
       return displayUser;
   };
}]);