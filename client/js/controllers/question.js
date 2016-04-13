angular
  .module('smartclickr')
  .controller('question', 
    ['$scope', 'Poll', '$rootScope', 'global', 'Question', '$q', '$timeout',
     function($scope,Poll, $rootScope, global, Question, $q, $timeout) {

      $scope.startup = function () {
        $scope.QNo = 1;
        global.setQuestion($scope.QNo);
        console.log("Started startup");
            Question.find({
              filter: {
                where:{
                  Sessionid: global.getAPoll().Sessionid, 
                  QuestionOrder: $scope.Qno
                }
              }
            }).$promise
            .then(function(response) {
              $scope.array = response;
              $scope.notarray = $scope.array[0];
              console.log($scope.notarray)
              $scope.stem = $scope.notarray.Stem;
            });
          }


        $scope.submitQ = function() {
          $scope.answer = ;
          Response.create({
            content: $scope.answer,
            name: 
          })

        }  

        $scope.startup()
    }]
  );