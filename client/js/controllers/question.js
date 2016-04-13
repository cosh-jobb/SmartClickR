angular
  .module('smartclickr')
  .controller('question', 
    ['$scope', 'Poll', '$rootScope', 'global', 'Question', '$q', function($scope,Poll, $rootScope, global, Question, $q) {

      $scope.startup = function () {
      Question.find({
      filter: {
        where:{Sessionid: 'C0zRV', QuestionOrder: 1}
      }
    }).then(function(response) {$scope.array = response;})
      };

      $scope.startup()

    }]
  );
