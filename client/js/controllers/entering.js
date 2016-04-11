angular
  .module('smartclickr')
  .controller('entering', 
    ['$scope', 'Poll', '$rootScope', 'global', function($scope,
      Poll, $rootScope, global) {
      var testing = global.getAPoll();
      console.log(testing);
      $scope.pollname = testing.Name;
  }])