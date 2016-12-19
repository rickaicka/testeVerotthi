var enderecos =  [
            {_id: 1, logradouro:"Rua Capitão Teófilo", numero: 63, complemento: "apto 142a", bairro: "Centro", cidade:"Guarulhos", estado:"SP", cep:"07011-050", tipo:"outros"},
            {_id: 2, logradouro:"Rua Capitão Teófilo", numero: 63, complemento: "apto 142a", bairro: "Centro", cidade:"Guarulhos", estado:"SP", cep:"07011-050", tipo:"principal"},
            {_id: 3, logradouro:"Rua Capitão Teófilo", numero: 63, complemento: "apto 142a", bairro: "Centro", cidade:"Guarulhos", estado:"SP", cep:"07011-050", tipo:"outros"}
        ];

module.exports = function(){
    var controller = {};
    controller.listaEnderecos = function(req, res){
        res.json(enderecos);
    };

    return controller;
}
