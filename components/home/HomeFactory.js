(function () {
    'use strict';

    angular.module('app').factory('HomeFactory', HomeFactory);

    function HomeFactory() {
        var products = [
            {
                "id": 0,
                "nome": "Product One",
                "category": "category One",
                "quantity": 10,
                "price": 24.90,
                'star': "3",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
            }, {
                "id": 1,
                "nome": "Product Two",
                "category": "category Two",
                "quantity": 7,
                "price": 17.90,
                "star": "4",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
            }, {
                "id": 2,
                "nome": "Product Tree",
                "category": "category Tree",
                "quantity": 8,
                "price": 18.90,
                "star": "2",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
            }, {
                "id": 3,
                "nome": "Product Four",
                "category": "category One",
                "quantity": 17,
                "price": 121.90,
                "star": "3",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
            }, {
                "id": 4,
                "nome": "Product Five",
                "category": "category Two",
                "quantity": 3,
                "price": 37.90,
                "star": "4",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
            }, {
                "id": 5,
                "nome": "Product Six",
                "category": "category One",
                "quantity": 5,
                "price": 57.90,
                "star": "3",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
            }


        ];


        return { recuperar: get, listar: list, itemCarrinho: itemNoCarrinho };

        function get(id) {
            return products[id];
        }

        function list() {
            return products;
        }
        function itemNoCarrinho() {
            return localStorage.length;
        }
    }

})();
