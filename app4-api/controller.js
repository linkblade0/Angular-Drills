angular.module('apiApp')
.controller('swCtrl', function($scope, swService){

  var promise = swService.getStarships().then(function(starships){
    $scope.starships = starships.results;
  })

})
