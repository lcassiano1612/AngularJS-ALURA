angular.module('alurapic').controller('GruposController', function($scope, $http){

    $scope.grupos = [];

    $http.get('v1/grupos').success(function(res){

        $scope.grupos = res;

    }).error(function(res){

        console.log(res);

    });

});