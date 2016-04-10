angular.module('smartclickr')
  .controller('createpoll', ['$scope', 'createpollservice', '$state',
      function($scope, createpollservice, $state) {
    $scope.user = {
      name: 'foo@bar.com',
      description: 'foobar'
    };

    $scope.creation = function() {createpollservice.create($scope.user.name, $scope.user.description)
        .then(function() {
          $state.go('command-center');
        });
    };
  }])