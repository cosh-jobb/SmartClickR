angular.module('my.controller', [])
.controller('MyController', function(MyService) {
	MyService.foo().then(
		function(response) {
			//success code
		},
		function(err) {
			//error code
		});
});
.controller('MyOthetController', function (MyService) {
		MyService.foo().then(
		function(response) {
			//success code
		},
		function(err) {
			//error code
		});
});