angular
  .module('smartclickr')
  .controller('question', 
    ['$scope', 'Poll', '$rootScope', 'global', 'Question', '$q', '$timeout', function($scope,Poll, $rootScope, global, Question, $q, $timeout) {

      $scope.startup = function () {
        $scope.QNo = 1;
        global.setQuestion($scope.QNo);
        $scope.SC = global.getAPoll().$promise;
        $timeout(, 2000);
        Question.find({
          filter: {
            where:{
              Sessionid: $scope.SC, 
              QuestionOrder: $scope.QNo
            }
          }
        }).$promise
        .then(function(response) {
          $scope.array = response;
          $scope.notarray = $scope.array[0];
          $scope.stem = $scope.notarray.Stem;
        });
      };

      $scope.startup()

    }]
  );
