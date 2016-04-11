angular
  .module('smartclickr')
  .controller('question', 
    ['$scope', 'Poll', '$rootScope', 'global', 'Question', function($scope,
      Poll, $rootScope, global, Question) {
      $scope.QNo = global.getQ();
      console.log($scope.QNo);
      $scope.SC = global.getAPoll().Sessioncode;
      var sc = 'C0zRV';
      console.log($scope.SC);
      $scope.stem = '';
      Question.find({
  		}).$promise
        .then(function(response) {
          $scope.array = response;
          $scope.notarray = $scope.array[0];
          console.log($scope.notarray)
          $scope.stem = $scope.notarray.Stem
        });
        }])