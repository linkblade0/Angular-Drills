angular.module('apiApp')
.controller('myCtrl', function($scope, mySvc) {


  $scope.display = function(){
    mySvc.getData($scope.pId).then(function(response){
      $scope.pokemon = response
    })
    $scope.pId = '';
  }

})


.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
