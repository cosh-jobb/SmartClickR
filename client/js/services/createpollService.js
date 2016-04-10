  angular
  .module('smartclickr')
  .factory('createpollService', ['Person', 'Poll', '$q', '$rootScope', function(Poll, $q,
      $rootScope) {
    function Creation(name, description) {
      console.log('the poll creation is about to commence');
      return Poll
        .create({
          name : name,
          description: description})
        .$promise
        .then(function(response) {
          console.log('the login response was ', response);
        });
    }

    return {
      CREATION:CREATION
    };
  }]);