angular.module('my.service', [])
.factory('MyService', function() {
	
	return {
		foo: function() {
			var p = new Promise(function(resolve, reject) {
				$http.get('http://comeremoteservice.com/api/users')
				.done(function(response) {
					resolve(response);
				})
				.fail(function(err) {
					reject(err);
				});
			});
		}
		return p;
	};
});