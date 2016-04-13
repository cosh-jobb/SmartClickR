angular.module('smartclickr')
  .controller('first', ['$scope', 'Poll', '$rootScope', 'global', '$state',
    function($scope, Poll, $rootScope, global, $state) {
      $scope.enteredcode ='';


      $scope.usepoll = function() {
        $scope.reviews = [];    
        Poll.find({
        filter: {
          where: {
            Sessioncode: $scope.enteredcode
          }
        }
      }).$promise
          .then(function(response) {
            $scope.reviews = response;
            $scope.notarray = $scope.reviews[0];
            if ($scope.notarray) {
              global.setAPoll($scope.notarray)
              $state.go('aftersessioncode');
            } else {
              console.log("BADCODE");
              $state.go('wrongcode')
            }
          });
      }
    }
  ]);