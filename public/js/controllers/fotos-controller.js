angular.module('alurapic').controller('FotosController', function($scope, $http){

    $scope.fotos    = [];
    $scope.filtro   = ''; 

    $http.get('v1/fotos').success(function(res){

        $scope.fotos = res;

    }).error(function(res){

        console.log(res);

    });

});