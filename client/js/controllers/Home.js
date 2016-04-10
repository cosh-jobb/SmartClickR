angular
  .module('smartclickr')
  .controller('Home', 
    ['$scope', 'Poll', function($scope,
      Poll) {
    $scope.poll = Poll.find({
      filter: {
        include: [
          'person'
        ]
      }
    });
  }])