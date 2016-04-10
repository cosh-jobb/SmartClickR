angular.module('smartclickr')
    .controller('createpoll', ['$scope', 'Poll', 'pollservice',
      '$state', function($scope, Poll, $state, pollservice) {
      $scope.user = {
          name: 'asd',
          description: 'asd'
          
        };

    $scope.creation = function() {
      pollservice.creation(
        $scope.user.name, $scope.user.description
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