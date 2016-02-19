angular.module('arrayApp')
.controller('arrayController', function($scope, myService){

  $scope.dataList = myService.getData();

})
