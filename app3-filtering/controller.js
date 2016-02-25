angular.module('myApp')
.controller('myCtrl', function($scope, myServ) {

$scope.data = myServ.getData();

})
