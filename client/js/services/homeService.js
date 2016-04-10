    angular
        .module('smartclickr')
        .factory('homeService', ['$filter',
         '$q', '$http', '$rootScope', function(Poll, $rootScope, $http) {
            function polls() {
                console.log('THE SERVICES HOME ACTIVATE');
                $http({method: 'GET', url: '/api/Poll'})
                .then(function successCallback(response) {
                    console.log('the response was: ', response)
                    return{response}
                });
            }
    return {
        getpoll: polls
    };
        }]);