angular
  .module('smartclickr')
  .controller('Home', 
    ['$scope', 'Poll', '$rootScope', 'global', function($scope,
      Poll, $rootScope, global) {
      var testing = global.getUser();
      console.log("currentuserid is: ", testing.userId);
  }])