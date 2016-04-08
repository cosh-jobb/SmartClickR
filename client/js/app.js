'use strict';

angular.module('smartclickr', [
	'ui.router',
	'lbServices'
])

.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	// define client routes, i.e., urls
	$stateProvider
	 .state('features', {
	 	url: '/features',
	 	templateUrl: 'views/features.html'
	 })
	  .state('login', {
	 	url: '/login',
	 	templateUrl: 'views/login.html'
	 })
	  .state('command-center', {
	 	url: '/command-center',
	 	templateUrl: 'views/command-center.html',
	 	authenticate: true
	 })
	  .state('forbidden', {
	 	url: '/forbidden',
	 	templateUrl: 'views/forbidden.html'
	 })
	  .state('create', {
	 	url: '/create',
	 	templateUrl: 'views/create.html'
	 })
	  .state('signup', {
	 	url: '/signup',
	 	templateUrl: 'views/signup.html'
	 })
	  .state('home', {
	 	url: '/',
	 	templateUrl: 'views/home.html'
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
}];