var pedidos =  [
            {_id: 1, nome:"Smartphone", descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus ut elit at pulvinar. Morbi ac posuere felis. In id ornare erat. Praesent lacinia quis risus id rutrum.", imagem:"smartphone.jpg"},
            {_id: 2, nome:"Console Playstation 4 500GB", descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus ut elit at pulvinar. Morbi ac posuere felis. In id ornare erat. Praesent lacinia quis risus id rutrum.", imagem:"ps4.jpg"},
            {_id: 3, nome:"Câmera", descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus ut elit at pulvinar. Morbi ac posuere felis. In id ornare erat. Praesent lacinia quis risus id rutrum.", imagem:"camera.jpg"},
        ];

module.exports = function(){
    var controller = {};
    controller.listaPedidos = function(req, res){
        res.json(pedidos);
    };

    controller.pedido = function(req, res){
        var idPedido = req.params.id;
        var pedido = produtos.filter(function(pedido){
            return pedido._id == idPedido;
        })[0];
        pedido ? res.json(pedido) : res.status(404).send('Pedido não encontrado');
    };



    return controller;
}
