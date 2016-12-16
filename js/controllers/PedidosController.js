angular.module('Main').controller('PedidosController', function($scope, $resource, $routeParams){
    $scope.listaPedidos = [];
    $scope.filtro = '';

    var Pedido = $resource('/pedidos/:id');
    var Pedidos = $resource('/pedidos');

    $scope.init = function(){
        buscaPedido();
    };

    function buscaPedido(){
        Pedidos.query(
            function(pedidos){
                $scope.listaPedidos = pedidos;
            }, function(erro){
                console.log("Não foi possível obter lista de pedidos");
                console.log(erro);
            }
        );
    };

    function buscaPedidoPorId(id){
        Pedido.get({id: $routeParams.pedidoId},
            function(pedido){
                $scope.pedido = pedido;
            },
            function(erro){
                console.log("Não foi possível obter pedido");
                console.log(erro);
            }
       );
    };


    $scope.init();
});
