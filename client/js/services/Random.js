angular
  .module('smartclickr')
  .factory('random', [function() {

    function makecode() {
      var sessioncode = '';
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      {for( var i=0; i < 5; i++)
        sessioncode += possible.charAt(Math.floor(Math.random() * possible.length));}
          return sessioncode
    }

    return {
      makecode: makecode 
    };
  }]);