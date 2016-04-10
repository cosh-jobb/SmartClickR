angular
  .module('smartclickr')
  .factory('AuthService', ['Person', '$q', '$rootScope', 'sessionvariables', 
    function(User, $q, sessionvariables, $rootScope) {
    function llogin(email, password) {
      return User.login({
        email: email, password: password})
      .$promise
      .then(function(response) {sessionvariables.CUID(response.user.id)})
//          $rootScope.currentUser = {
//            id: response.user.id,
//            tokenId: response.id,
//            email: email
//          };
//          $rootScope.currentUserid = response.id;
//          console.log('the currentUsers id is: ', $rootScope.currentUser);
//        });
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
      login: llogin,
      logout: logout,
      register: register
    };
  }]);