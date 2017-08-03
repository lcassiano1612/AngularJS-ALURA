angular.module('alurapic').controller('FotosController', function($scope, $http){

    $scope.fotos    = [];
    $scope.filtro   = ''; 
    $scope.mensagem = '';

    $http.get('v1/fotos').success(function(res){

        $scope.fotos = res;

    }).error(function(res){

        console.log(res);

    });

    $scope.remover = function(foto){

        $http.delete('v1/fotos/' + foto._id).success(function(){

            var indexFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indexFoto, 1);

            console.log("foto removida: " + foto.titulo);
            $scope.mensagem = "Foto removida: "+ foto.titulo + "!!!";

        }).error(function(res){

            console.log(res);
            $scope.mensagem = "Foto não foi removida: "+ foto.titulo + "!!!";

        });

    }

});