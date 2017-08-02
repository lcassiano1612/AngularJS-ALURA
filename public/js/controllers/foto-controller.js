angular.module('alurapic').controller('FotoController', function($scope, $http){

    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = function(){

        if($scope.formulario.$valid){

            $http.post('v1/fotos', $scope.foto).success(function(){
                
                $scope.mensagem = "Foto cadastrado com successo!";
                $scope.foto = {};

            }).error(function(res){

                $scope.mensagem = "Não foi possivel cadastrar foto!";
                console.log(res);

            });

        }

    }

});