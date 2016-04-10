angular.module('smartclickr')
    .controller('createpoll', ['$scope', 'Poll', 'Random', 'pollservice',
      '$state', function($scope, Poll, $state, pollservice) {
        $scope.user = {
          name: 'asd',
          description: 'asd'
        };

    $scope.creation = function() {
      pollservice.CREATION(
        $scope.user.email, $scope.user.description
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