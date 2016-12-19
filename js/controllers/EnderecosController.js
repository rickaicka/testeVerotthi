angular.module('Main').controller('EnderecosController', function($scope, $resource, $routeParams){
    $scope.listaEnderecos = [];
    $scope.filtro = '';

    var Enderecos = $resource('/enderecos');

    $scope.init = function(){
        buscaEnderecos();
    };

    function buscaEnderecos(){
        Enderecos.query(
            function(enderecos){
                $scope.listaEnderecos = enderecos;
            }, function(erro){
                console.log("Não foi possível obter lista de pedidos");
                console.log(erro);
            }
        );
    };

    $scope.init();
});
