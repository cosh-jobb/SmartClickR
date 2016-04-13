'use strict';

angular.module('smartclickr', [	'ui.router','lbServices'])


.config([ '$stateProvider', '$urlRouterProvider',
 function($stateProvider, $urlRouterProvider){
	// define client routes, i.e., urls
	$stateProvider
	 .state('features', {
	 	url: '/features',
	 	templateUrl: 'views/features.html'
	 })
	  .state('login', {
	 	url: '/login',
	 	templateUrl: 'views/login.html',
	 	controller: 'AuthLoginController',
	 	authorization: true
	 })
	  .state('command-center', {
	 	url: '/command-center',
	 	templateUrl: 'views/command-center.html',
	 	controller: 'Home'
	 })
	  .state('forbidden', {
	 	url: '/forbidden',
	 	templateUrl: 'views/forbidden.html'
	 })
	  .state('register', {
	 	url: '/create',
	 	templateUrl: 'views/create.html',
	 	controller: 'Registration',
	 	authorization: true
	 })
	  .state('home', {
	 	url: '/',
	 	templateUrl: 'views/home.html',
	 	controller: 'first'
	 })
	  .state('createpoll', {
	 	url: '/createpoll',
	 	templateUrl: 'views/createpoll.html',
	 	controller: 'createpoll'
	 })
	  .state('poll', {
	 	url: '/poll',
	 	templateUrl: 'views/poll.html',
	 	controller: 'PollControllers'
	 })
	  .state('aftersessioncode', {
	 	url: '/poll/answer',
	 	templateUrl: 'views/enterPoll.html',
	 	controller: 'entering'
	 })
	  .state('wrongcode', {
	 	url: '/nopollfound',
	 	templateUrl: 'views/badcode.html',
	 	controller: 'first'
	 })
	  .state('answeringquestions', {
	 	url: '/poll/answer/question',
	 	templateUrl: 'views/answeringquestions.html',
	 	controller: 'question'
	 })
	  .state('viewingresponses', {
	  	url: '/results',
	  	templateUrl: 'views/viewResponses.html',
	  	controller: 'results'
	  	});
	 $urlRouterProvider.otherwise('/');
	}])
 
  .run(['$rootScope', '$state', function($rootScope, $state) {
  	$rootScope.$on('$stateChangeStart', function(event, next){
  		if (next.authenticate && !$rootScope.currentUser){
  			event.preventDefault();
  			$state.go('forbidden');
  		}
  	})
  }]);