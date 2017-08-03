angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){

    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId){

        $http.get('v1/fotos/' + $routeParams.fotoId).success(function(res){

            $scope.foto = res;

        }).error(function(res){

            $scope.mensagem = "Não pode ser localizada a foto: " + $routeParams.fotoId;

        });

    }

    $scope.submeter = function(){

        if($scope.formulario.$valid){

            if($scope.foto._id){

                $http.put('v1/fotos/'+$scope.foto._id, $scope.foto).success(function(){

                    $scope.mensagem = "Foto foi alterada com successo: "+$scope.foto.titulo;

                }).error(function(res){

                    $scope.mensagem = "Não foi possivel alterar!";

                });

            }else{

                $http.post('v1/fotos', $scope.foto).success(function(){
                
                    $scope.mensagem = "Foto cadastrado com successo!";
                    $scope.foto = {};

                }).error(function(res){

                    $scope.mensagem = "Não foi possivel cadastrar foto!";
                    console.log(res);

                });

            }

        }

    }

});