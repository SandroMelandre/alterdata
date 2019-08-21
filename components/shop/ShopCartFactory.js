(function() {
    'use strict';
  
    angular.module('app')
      .factory('ShopCartFactory', ShopCartFactory);
  
    function ShopCartFactory() {
      var cart = [{
        "id": 0,
        "nome": "Useer Name",
        "email": "user@email.com",
        "password": "123456"
      }
    ];
  
  
      return {
        logar: get,
        listar: list,
        listaCarrinho: GetStorage,
      
       
      };
  
      function get(id) {
        return user[id];
      }
  
      function list() {
        return users;
      }

      function GetStorage(){
        var cart =[];
        var item = "";
        Object.keys(localStorage).forEach(function(key){
         
          if(key !='userName' && key !='Usertoken'){
            item  = JSON.parse(localStorage.getItem(key));
            cart.push({
              "id": item.id,
              "nome":item.nome,
              "category": item.category,
              "quantity": item.quantity,
              "price": item.price,
              'star': item.star,
              "description": item.description
            });

          }
         
         
        });
        return cart;
      }

      

     

        
    }
  
  })();