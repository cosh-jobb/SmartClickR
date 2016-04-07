angular.module('smartclickr')
.controller('PollController', ['$scope', 'Poll', function($scope, Poll) {
	$scope.polls = Poll.find();
}]);