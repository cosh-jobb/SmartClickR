angular.module('smartclickr')
  .controller('AuthLoginController', ['Random','$scope', 'AuthService', '$state', '$q',
        function($scope, AuthService, $state, $q, Random) {
    $scope.user = {
      email: 'foo@bar.com',
      password: 'foobar',
      sessioncode: Random.makeid()
    };
    
    $scope.login = function() {AuthService.login($scope.user.email, $scope.user.password)
      .then(function() {$state.go('command-center');});};
  }])
  .controller('AuthLogoutController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    AuthService.logout()
      .then(function() {
        $state.go('home');
      });
  }])
  .controller('Registration', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    $scope.person = {
      email: 'baz@qux.com',
      password: 'bazqux'
    };

    $scope.register = function() {
      AuthService.register($scope.user.email, $scope.user.password)
        .then(function() {
          $state.transitionTo('login');
        });
    };
  }]);
