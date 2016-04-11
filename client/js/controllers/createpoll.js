angular.module('smartclickr')
    .controller('createpoll', ['$scope', 'pollservice',
      '$state', function($scope, pollservice, $state) {
        $scope.poll = {
          
        };

    $scope.creation = function() {Random.makeid()      
        .then(function() {pollservice.creation($scope.poll.name, $scope.poll.description)
      });}
      
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