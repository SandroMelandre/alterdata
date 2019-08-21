(function () {
  'use strict';

  angular.module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'LoginFactory'];

  function LoginController($scope, LoginFactory) {

    $scope.email;
    $scope.password;
    $scope.auth = true;
    $scope.entrar = function entrar() {
      let auth = LoginFactory.recuperar($scope.email, $scope.password);
      return auth;
    }
  }




})();
