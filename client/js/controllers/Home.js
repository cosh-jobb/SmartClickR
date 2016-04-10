angular
  .module('smartclickr')
  .controller('Home', 
    ['$scope', '$rootScope', 'Poll', function($scope,
      Poll, $rootScope) {
      console.log("The current user is: ", $rootScope.currentUser);
      var user = $rootScope.currentUser;
//    $scope.poll = Poll.find({
//      filter: {
//        include: [
//          'person'
//        ]
//      }
//    });
  }])