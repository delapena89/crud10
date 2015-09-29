app.controller('BeerController', function($scope, httpFactory, $http) {
  $scope.beer = {};
  getBeers = function(url) {
    httpFactory.getAll(url)
    .then(function(response) {
      $scope.beers = response.data;
  });
};
getBeers('api/v1/beers');


$scope.postBeer = function() {
  var payload = $scope.beer;
  httpFactory.post('/api/v1/beers', payload)
  .then(function(response) {
    $scope.beers.push(response.data);
    $scope.beer = {};
    getBeers('api/v1/beers');
  });
};

$scope.deleteBeer = function(id) {
  httpFactory.delete('api/v1/beer/' + id)
  .then(function(response) {
    getBeers('api/v1/beers');
  });
};







}); //close controller
