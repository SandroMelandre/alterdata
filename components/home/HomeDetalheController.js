(function () {
    'use strict';

    angular.module('app').controller('HomeDetalheController', HomeDetalheController);

    HomeDetalheController.$inject = ['$scope', '$routeParams', 'HomeFactory'];

    function HomeDetalheController($scope, $routeParams, HomeFactory) {
        $scope.titulo = 'Detalhe do produto';
        $scope.product = HomeFactory.recuperar($routeParams.id);

    }
})();

