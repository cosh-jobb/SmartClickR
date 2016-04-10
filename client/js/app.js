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
	 	url: '/register',
	 	templateUrl: 'views/create.html',
	 	controller: 'Registration',
	 	authorization: true
	 })
	  .state('signup', {
	 	url: '/signup',
	 	templateUrl: 'views/signup.html'
	 })
	  .state('home', {
	 	url: '/',
	 	templateUrl: 'views/home.html'
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