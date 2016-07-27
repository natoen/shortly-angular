angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  
  $scope.signout = Auth.signout;

  Links.getAll().then(function (res) {
    $scope.data.links = res;
  });
});
