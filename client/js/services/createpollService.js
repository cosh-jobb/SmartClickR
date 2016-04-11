angular
  .module('smartclickr')
  .factory('pollservice', ['Poll', '$q', '$rootScope', function(Poll, $q,
      $rootScope) {
    function creation(name, description) {

      	return Poll
      	.create
      	({
		  Name: name,
		  Description: description,
		  Order: 0,
		  Sessioncode: 'string',
		  CreateDate: 2016-04-10,
		  StartDate: 2016-04-10,
		  EndDate: 2016-04-10,
        })
        .$promise
        .then(function(response) {
          console.log('the currentUsers id is: ', $rootScope.currentUser)
        });
    }

      return {
        creation: creation
      };
  }]);