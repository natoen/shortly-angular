angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.loading = true;
  $scope.signout = Auth.signout;

  $scope.addLink = function (valid) {
    if (valid) {
      $scope.loading = false;
      Links.addOne($scope.link, function () {
        $scope.link.url = '';
        $scope.loading = true;
      });
    }
  };
});
