angular
  .module('smartclickr')
  .factory('AuthService', ['Person', '$q', '$rootScope', 'global', function(User, $q,
      $rootScope, global) {
    function login(email, password) {
      console.log('the login is about to commence');
      return User
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          global.setUser(response);
        });
    }

    function logout() {
      return User
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
       });
    }

    function register(email, password) {
      return User
        .create({
         email: email,
         password: password
       })
       .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };
  }]);