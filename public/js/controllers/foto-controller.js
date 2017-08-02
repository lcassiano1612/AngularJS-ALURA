angular.module('alurapic').controller('FotoController', function($scope){

    $scope.foto = {};

    $scope.submeter = function(){

        $http.post('v1/fotos', $scope.foto).success(function(){
            

        }).error(function(res){

            console.log(res)

        });

    }

});