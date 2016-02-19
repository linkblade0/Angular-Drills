angular.module('myApp')
.controller('mainCtrl', function($scope, myService) {

  $scope.data = myService.getData();

})
