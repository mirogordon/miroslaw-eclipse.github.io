angular.module('nauka', []);

angular.module('nauka').controller('testController', ['$scope', function($scope){
  $scope.test='Miroslaw';
  
  $scope.persons = [{imie: 'Jan', nazwisko: 'Kowalski'}, {imie: 'Henryk', nazwisko: 'Nowak'}];
  
  
}]);