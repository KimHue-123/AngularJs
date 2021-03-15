'use restrict';
var loginModule = angular.module('loginModule', [])

loginModule.controller('LoginController', function($scope, LoginService, $filter, $location, $stateParams) {
    $scope.login = function(form) {
        $scope.isLoginError = false;
        if (form.$valid) {
            LoginService.checkLogin($scope.user.userName, $scope.user.password).then(function(res) {
                var user = $filter('filter')(res.data.recordset, { "userName": $scope.user.username, "pass": $scope.user.password })[0];
                if (user) {
                    //$location.url('/welcom')
                    $location.path('/welcome');
                } else {
                    $scope.isLoginError = true;
                    $scope.loginErrorMsg = "Invalid UserName or Password";
                }
            })
        }

        function newLogin() {
            $scope.user = {};
        };

        function init() {
            if (Object.keys($stateParams).length === 0) {
                newLogin();
            }
        };
        //init();
    }
})