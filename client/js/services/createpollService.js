  angular
  .module('smartclickr')
  .factory('pollservice', ['Random', 'Poll', '$q', '$rootScope', function(Poll, $q,
      $rootScope, Random) {
    function CREATION(name, description, Random) {
      console.log('the poll creation is about to commence');
      Poll
        .create({
          name : name,
          description: description,
          sessionid: Random.makeid()
        })
        .$promise
        .then(function(response) {
          console.log('the login response was ', response);
        });
    }

    return {
      CREATION:CREATION
    };
  }]);