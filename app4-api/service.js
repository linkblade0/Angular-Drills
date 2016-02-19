angular.module('apiApp')
.service('swService', function($q, $http) {

  var baseUrl = 'http://swapi.co/api/';

  this.getStarships = function(){
    var later = $q.defer();

    $http({
      method: 'GET',
      url: baseUrl + 'starships/',
    }).then(function(response) {
      later.resolve(response.data)
    })

    return later.promise;
  }

})
