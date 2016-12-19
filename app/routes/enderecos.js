module.exports = function(app){
    var controller = app.controllers.enderecos;

    app.get('/enderecos', controller.listaEnderecos);
}
