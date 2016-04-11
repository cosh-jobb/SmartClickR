angular.module('smartclickr')
  .controller('first', ['$scope', 'Poll', '$rootScope',
      function($scope, Poll, $rootScope) {
        var enteredcode = '';
        console.log(Review.exist({filter: {where: {Sessioncode: enteredcode}}}););

  }]);