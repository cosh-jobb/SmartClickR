angular
  .module('smartclickr')
  .controller('question', 
    ['$scope', 'Poll', '$rootScope', 'global', 'Question', '$q', '$timeout',
     function($scope,Poll, $rootScope, global, Question, $q, $timeout) {

      $scope.startup = function () {
        $scope.QNo = 1;
        global.setQuestion($scope.QNo);
        $scope.SC = global.getAPoll();
          console.log($scope.SC);
            Question.find({
              filter: {
                where:{
                  Sessionid: $scope.SC, 
                  QuestionOrder: global.getAPoll()
                }
              }
            }).$promise
            .then(function(response) {
              $scope.array = response;
              $scope.notarray = $scope.array[0];
              $scope.stem = $scope.notarray.Stem;
            });

        $scope.startup()
      }
    }]
  );

  function getSC(name) {
  var deferred = $q.defer();

  function() {
    deferred.notify('About to greet ' + name + '.');

    if (okToGreet(name)) {
      deferred.resolve('Hello, ' + name + '!');
    } else {
      deferred.reject('Greeting ' + name + ' is not allowed.');
    }
  }

  return deferred.promise;
}

var promise = asyncGreet('Robin Hood');
promise.then(function(greeting) {
  alert('Success: ' + greeting);
}, function(reason) {
  alert('Failed: ' + reason);
}, function(update) {
  alert('Got notification: ' + update);
});