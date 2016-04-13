angular.module('smartclickr')
    .controller('result', ['$scope','responses','$state','global', function($scope, responses, $state, global) {
        $scope.responses = {
          
        };

    $window.onload = function() {
        console.log("It works");
    }

    $scope.getResponses = function() {
      console.log('This is stuff');
    };

    $scope.plot = function () {
      var dataPath = responses.findById(1);
       d3.json(dataPath, function(json) {
       pieChart(json, dataPath);
       verticalBars(json, dataPath);
    })};

    
    
  }]);