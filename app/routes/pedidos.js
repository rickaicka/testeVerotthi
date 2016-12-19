module.exports = function(app){
    var controller = app.controllers.pedidos;

    app.get('/pedidos', controller.listaPedidos);
}
