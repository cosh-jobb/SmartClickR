angular
  .module('smartclickr')
  .factory('pollservice', ['Poll', '$q', '$rootScope', function(Poll, $q,
      $rootScope) {
    function creation(name, description, Sessioncode, userId) {
      console.log("THIS IS WHAT I GOT: ", name, description, Sessioncode, userId)
      var why = userId;
      	return Poll
      	.create
      	({
		  Name: name,
		  Description: description,
		  Order: 0,
		  Sessioncode: Sessioncode,
		  CreateDate: 2016-04-10,
		  StartDate: 2016-04-10,
		  EndDate: 2016-04-10,
      personId: why
        })
        .$promise;
    }

      return {
        creation: creation
      };
  }]);