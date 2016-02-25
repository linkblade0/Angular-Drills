angular.module('apiApp')
.service('mySvc', function($q, $http){

var baseUrl = 'http://pokeapi.co/api/v2/';

this.getData = function(id){

  return $http({
    method: 'GET',
    url: baseUrl + 'pokemon/' + id
  }).then(function(response){
    return response.data
  })


}


})
