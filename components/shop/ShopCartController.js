

(function() {
  'use strict';

  angular.module('app')
    .controller('ShopCartController',ShopCartController);

  ShopCartController.$inject = ['$scope','ShopCartFactory'];
 
  function ShopCartController($scope,ShopCartFactory) {
    
    $scope.listarCart = ShopCartFactory.listaCarrinho();
    $scope.checkout = function chekout(){
      let login  =  localStorage.getItem('userName');
      if(!login){
        console.log("tem que logar");
      } else {
        console.log("modal");
      }
    }

    $scope.goLogin = function(){
      setTimeout(function() {
        window.location.href = "/#/login";
      
      }, 1000);
    }

    $scope.sair = function(){
       localStorage.clear();
      setTimeout(function() {
        window.location.href = "/";
      
      }, 1000);
    }
    $scope.removeItemCart = function($scope) {
    
      localStorage.removeItem($scope.id);
      setTimeout(function() {
        window.location.href = "http://localhost:3000/#/shopcart?="+(Date.now() / 1000 | 0);
      }, 1000);
    }

    $scope.totalCart = function TotalCart(){
      let soma = 0;
      let item;
     
      Object.keys(localStorage).forEach(function(key){
        if(key !='userName' && key !='Usertoken'){
        item  = JSON.parse(localStorage.getItem(key));
        soma  =  soma +item.price;
      }
      });
        return soma;
     }  
     
   }
})();

