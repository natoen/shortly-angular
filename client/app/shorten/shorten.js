angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function (valid) {
    console.log($scope.link);
    if (valid) {
      Links.addOne($scope.link, function () {
        $scope.link.url = '';
      });
    }
    // $scope.link.url = '';
  };
});
