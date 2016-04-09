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
	 	templateUrl: 'views/command-center.html'
	 })
	  .state('forbidden', {
	 	url: '/forbidden',
	 	templateUrl: 'views/forbidden.html'
	 })
	  .state('register', {
	 	url: '/register',
	 	templateUrl: 'views/create.html',
	 	controller: 'Registration'
	 })
	  .state('signup', {
	 	url: '/signup',
	 	templateUrl: 'views/signup.html'
	 })
	  .state('home', {
	 	url: '/',
	 	templateUrl: 'views/home.html'
	 })
	  .state('create', {
	 	url: '/create',
	 	templateUrl: 'views/createpoll.html'
	 })
	  .state('poll', {
	 	url: '/poll',
	 	templateUrl: 'views/poll.html',
	 	controller: 'PollController'
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