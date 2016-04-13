angular
  .module('smartclickr')
  .controller('entering', 
    ['$scope', 'Poll', '$rootScope', 'global', function($scope,
      	Poll, $rootScope, global) {
      	var testing = global.getAPoll();
      	$scope.pollname = testing.Name
  }])