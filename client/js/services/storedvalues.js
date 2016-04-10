  angular
  .module('smartclickr')
  .factory('sessionvariables', [function($rootScope) {
    var curUsrid = '';
    var curUsremail = '';
    var currentpoll = '';
    var createdsessioncode = '';

    function CUID(UserID) {
      console.log('Current user is about to be changed, it is now: ', curUsrid);
      curUsrid = UserID;
      console.log('Current user is changed, it is now: ', curUsrid);

    }

    return {
      CUID: CUID
    };
  }]);