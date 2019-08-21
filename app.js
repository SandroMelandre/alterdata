(function() {
    'use strict';
    angular.module('app', ['ngRoute']);
  
    angular.module('app')
      .run(function($rootScope, $route, $routeParams, $location) {
      

        $rootScope.$on('$routeChangeStart',function(evt,next,current){
        //  console.log('Nome do Evento:'+evt.name);
        //  console.log('Próxima Rota:'+ angular.toJson(next));
        //  console.log('Rota Atual:'+ angular.toJson(current));
        });
  
        $rootScope.$route = $route;
        $rootScope.$location = $location;
        $rootScope.$routeParams = $routeParams;
        $rootScope.AuthUser = localStorage.getItem('userName');
        $rootScope.sair = function(){
          localStorage.removeItem('userName');
          setTimeout(function() {
              window.location.href = "/";
          }, 500);
        }

       
      
      });
  })();