var coba = angular.module('coba',[]);

coba.controller('inputan', ['$scope', function($scope) {
  $scope.namaUser = '';
}])
coba.controller('menu', ['$scope', function($scope) {
  $scope.uang = 0;
}])
coba.controller('submenu', ['$scope', function($scope) {
           $scope.daftarorang = [{nama:'Budi'},{nama:'Icha'},{nama:'Fajar'},{nama:'Candra'},{nama:'Anton'},{nama:'Winny'},{nama:'Danu'}];
}])
coba.controller('masukan', ['$scope', function($scope) {
  $scope.select = '0';
  $scope.dataSelection = {
   '0': '-- Pilih Nama User --',
   '1': 'Budi',
   '2': 'Icha',
   '3': 'Fajar',
   '4': 'Candra',
   '5': 'Anton',
   '6': 'Winny',
   '7': 'Danu',
  };
  $scope.dataSelectionKeys = Object.keys($scope.dataSelection)
}]);
