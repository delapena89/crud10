app.controller('BeerController', function($scope, httpFactory, $http) {
  $scope.beer = {};
  getBeers = function(url) {
    console.log(url);
    httpFactory.getAll(url)
    .then(function(response) {
      $scope.beers = response.data;
    });
  };

  getBeers('api/v1/beers');

  $scope.postBeer = function() {
    var payload = $scope.beer;
    httpFactory.post('api/v1/beers', payload)
    .then(function(response){
      $scope.beers.push(response.data);
      console.log($scope.beers);
      $scope.beer = {};
    });
  };

}); //close controller
