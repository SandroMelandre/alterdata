(function() {
    'use strict';
    
    angular.module('app')
      .config(function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'components/home/index.view.html',
            controller: 'HomeController'
          })
          .when('/product/:id', {
            templateUrl: 'components/home/detail.view.html',
            controller: 'HomeDetalheController'
          })
          .when('/login', {
            templateUrl: 'components/login/Login.view.html',
            controller: 'LoginController'
          })
          .when('/shopcart', {
            templateUrl: 'components/shop/shopcart.view.html',
            controller: 'ShopCartController'
          }).otherwise({
            redirectTo: '/',
          });

        
      });
  })();