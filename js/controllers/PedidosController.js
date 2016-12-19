angular.module('Main').controller('PedidosController', function($scope, $resource, $routeParams){
    $scope.listaPedidos = [];
    $scope.filtro = '';

    var Pedidos = $resource('/pedidos');

    $scope.init = function(){
        buscaPedidos();
    };

    function buscaPedidos(){
        Pedidos.query(
            function(pedidos){
                $scope.listaPedidos = pedidos;
            }, function(erro){
                console.log("Não foi possível obter lista de pedidos");
                console.log(erro);
            }
        );
    };

    $scope.init();
});
