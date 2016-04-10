  angular
  .module('smartclickr')
  .factory('pollservice', ['Random', 'Poll', '$q', '$rootScope', function(Poll, $q,
      $rootScope, Random) {
    function creation(name, description) {
      console.log('the poll creation is about to commence');
      	return Poll
      	.create
      	({
		  Poll_id: 0,
		  Owner_id: 0,
		  Name: name,
		  Description: description,
		  Order: 0,
		  Sessioncode: 'string',
		  CreateDate: 2016-04-10,
		  StartDate: 2016-04-10,
		  EndDate: 2016-04-10,
		  id: 0,
		  personId: 0
        })
        .$promise
        .then(function(response) {
          console.log('the login response was ', response);
        });
    }

    return {
      creation: creation
    };
  }]);