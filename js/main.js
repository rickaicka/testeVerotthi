angular.module('Main', ['ngRoute','ngResource']).config(function($routeProvider, $locationProvider){

    $routeProvider.when('/',{
        templateUrl:'partials/pedidos.html',
        controller:'PedidosController'
    });

    $routeProvider.when('/pedidos',{
        templateUrl:'partials/pedidos.html',
        controller:'PedidosController'
    });

    $routeProvider.when('/enderecos',{
        templateUrl:'partials/enderecos.html',
        controller:'EnderecosController'
    });

    $routeProvider.when('/perfil',{
        templateUrl:'partials/perfil.html',
        controller:'PerfilController'
    });

    $routeProvider.when('/logout',{
        templateUrl:'partials/logout.html'
    });


    $routeProvider.otherwise({redirectTo:'/'});

    $locationProvider.hashPrefix('');
});
