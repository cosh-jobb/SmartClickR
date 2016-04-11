angular.module('smartclickr')
    .controller('createpoll', ['$scope', 'pollservice', 'random',
      '$state','global', function($scope, pollservice, random, $state, global) {
        $scope.poll = {
          
        };

    $scope.creation = function() {
      var sessionC = random.makecode();
      var userjson = global.getUser();
      console.log('The user id is: ' ,userjson.userId);
      pollservice.creation($scope.poll.name, $scope.poll.description, sessionC, userjson.userId)
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