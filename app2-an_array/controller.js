angular.module('arrayApp')
.controller('arrayController', function($scope, srv) {

  $scope.data = srv.getData();

})
