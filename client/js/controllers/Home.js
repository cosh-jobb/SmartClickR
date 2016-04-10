angular
  .module('smartclickr')
  .controller('Home', 
    ['$scope', '$rootScope', 'Poll', function($scope,
    	Poll, $rootScope) {
      		$scope.changeRs = function() {
        	$rootScope.test = new Date();
    		};
      	console.log("CURRENT USER: ", $rootScope.currentUser);
//    $scope.poll = Poll.find({
//      filter: {
//        include: [
//          'person'
//        ]
//      }
//    });
  }])