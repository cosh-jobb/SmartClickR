angular.module('smartclickr')
	.controller('PollControllers', ['$scope', 'Poll', 
		function($scope, Poll) {$scope.polls = Poll.find();}]);