angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function (valid) {
    if (valid) {
      Links.addOne($scope.link, function () {
        $scope.link.url = '';
      });
    }
  };
});
