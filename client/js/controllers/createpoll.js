angular.module('smartclickr')
  .controller('createpoll', ['$scope', 'Poll', 'createpollService', 
    function($scope, Poll) {
      $scope.name='placeholder';
      $scope.des = 'placeholder2';

      
      $scope.creationofpoll = function() {
        createpollService.CREATION($scope.name, $scope.des)
        .then(function() {
          console.log('A POLL WAS CREATED')
        })
      };
    }
  ]);