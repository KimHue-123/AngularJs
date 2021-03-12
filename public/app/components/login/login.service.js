angular.module('loginModule').factory('LoginService',
    function($http, REST_API_SERVER) {
        return {
            checkLogin: function(userName, pass) {
                var api = REST_API_SERVER + 'login';
                return $http.post(api, JSON.stringify({ userName: userName, pass: pass }));
            }
        }

    })