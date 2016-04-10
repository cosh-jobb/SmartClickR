angular
  .module('smartclickr')
  .factory('AuthService', ['Person', '$q', '$rootScope', function(User, $q,
      $rootScope) {
    function login(email, password) {
      console.log('the login is about to commence');
      return User
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          console.log('the login response was ', response);
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email
          };
          console.log('the currentUsers id is: ', $rootScope.currentUser)
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