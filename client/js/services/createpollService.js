  angular
  .module('smartclickr')
  .factory('createpollservice', ['Poll', '$q', '$rootScope', function(Poll, $q,
      $rootScope) {
    function create(Name, Description) {
      console.log('the login is about to commence');
      return Poll
        .create
        ({
          Name: Name,
          Description:Description,
          Sessioncode:'aaaa'
        })
        .$promise
        .then(function(response) {
          console.log('the login response was ', response);
        });
    }

    return {
      create: create
    };
  }]);