angular.module('smartclickr')
    .controller('createpoll', ['$scope', 'pollservice', 'random',
      '$state','global', function($scope, pollservice, random, $state, global) {
        $scope.poll = {
          
        };

    $scope.creation = function() {
      var sessionC = random.makecode();
      console.log($scope.poll);
      var userjson = global.getUser();
      pollservice.creation($scope.poll.name, $scope.poll.description, sessionC, userjson.userId)
      .then(
        function() {
          $state.go('home');
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