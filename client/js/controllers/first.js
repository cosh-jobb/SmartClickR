angular.module('smartclickr')
  .controller('first', ['$scope', 'Poll', '$rootScope',
      function($scope, Poll, $rootScope) {
      $scope.enteredcode ='';
      $scope.usepoll = function() {
        console.log($scope.enteredcode);
        console.log('the session will be checked');
        return Poll
        .exist({Sessioncode:$scope.enteredcode});
    }
  }]);