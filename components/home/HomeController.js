(function () {
    'use strict';

    angular.module('app').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'HomeFactory'];

    function HomeController($scope, HomeFactory, $route) {

        let cart = [];
        $scope.titulo = 'Esta é a home !!!';
        $scope.tamanho = 0;
        $scope.listar = function () {
            return HomeFactory.listar();
        }
        $scope.addCart = function ($scope) {

            let product = HomeFactory.recuperar($scope);
            let jsonStr = JSON.stringify(product);
            cart.push(jsonStr);
            localStorage.setItem(product['id'], jsonStr);
        };

        $scope.goShopCart = function () {
            setTimeout(function () {
                window.location.href = "/#/shopcart";

            }, 1000);
        }


    }

})();

