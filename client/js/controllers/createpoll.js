angular.module('smartclickr')
    .controller('createpoll', ['$scope', 'Poll', 'pollservice',
      '$state', function($scope, Poll, $state, pollservice) {
      $scope.poll = {
          name: 'asd',
          description: 'asd'
          
        };

    $scope.creation = function() {
      pollservice.creation(
        $scope.poll.name, $scope.poll.description
      )
      .then(
        function() {
          $state.go('createQuestion');
        }
      );
    };
      }
    ]
    );



//    {pollservice.CREATION(
//      $scope.user.email, $scope.user.password)
//        .then(function() {
//          $state.go('createQuestion');
//        });
//    };
//  }]);