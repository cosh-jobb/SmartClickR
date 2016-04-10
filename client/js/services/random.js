    angular
        .module('smartclickr')
        .factory('Random', [function makeid()
			{
			    var text = "";
			    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				    for( var i=0; i < 10; i++ )
 			       text += possible.charAt(Math.floor(Math.random() * possible.length));

 			   return text;
			}]);	
        angular
  .module('smartclickr')
  .factory('Random', [function() {

    function makeid() {
      	console.log('the random string is about to commence');
      	var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < 10; i++ )
 		text += possible.charAt(Math.floor(Math.random() * possible.length));

 			   return text;
    }

    return {
    	makeid:makeid
    };
  }]);