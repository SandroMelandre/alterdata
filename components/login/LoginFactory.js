
(function () {
  'use strict';

  angular.module('app')
    .factory('LoginFactory', LoginFactory);

  function LoginFactory() {
    var users = [{
      "id": 0,
      "nome": "alterdata User",
      "email": "alterdata@alterdata.com",
      "password": "alterdata"
    },
    {
      "id": 1,
      "nome": "outro User",
      "email": "outro@outro.com",
      "password": "outro"
    }];


    return {


      listar: list,
      recuperar: get

    };

    function get(email, password) {

      let login = users.filter(function (v) { return v.email == email && v.password == password });

      if (login.length > 0) {
       
        let tokenstr = base64str(email + password);
        localStorage.setItem("Usertoken", tokenstr);
        localStorage.setItem("userName", login[0]['nome']);
        login.push([200, { token: tokenstr }, {}]);
        setTimeout(function () {
          window.location.href = "/";
        }, 1000);
        return true;

      } else {
        return false;
      }

    }

    function base64str(source) {
      let encodedSource = btoa(source);
      return encodedSource;
    }

    function list() {
      return users;
    }








  }

})();