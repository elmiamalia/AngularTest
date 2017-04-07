var coba = angular.module('coba',[
  'ngCookies'
]);
coba.controller('page', ['$scope', '$cookieStore', function($scope, $cookieStore){
  $scope.struktur_list = {
    nama:'NoName',
  };
  $scope.list = [
    $scope.struktur_list,
    $scope.struktur_list,
    $scope.struktur_list,
    $scope.struktur_list,
  ];
}]);
