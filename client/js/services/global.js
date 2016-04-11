angular
  .module('smartclickr')
  .factory('global', [function() {
    var user = '';

    function setUser(InputUser) {
      user = InputUser;
      console.log("THE NEW USER IS: ", user)
      return user
    }

    function getUser(InputUser) {
      return user
    }

    return {
      setUser: setUser,
      getUser: getUser
    };
  }]);