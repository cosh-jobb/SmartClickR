angular
  .module('smartclickr')
  .factory('sessionvariables', ['Poll', '$rootScope', function(Poll,
      $rootScope) {
    var Usr;
    function CUID(newUser) {
      console.log('the user is about to change', newUser);
      var Usr = newUser
      return Usr
    }

    function GUID() {
      return Usr
    }

    return {
      CUID: CUID
    };
  }]);