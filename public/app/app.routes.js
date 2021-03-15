//state

var app = angular.module('app', [
    'ui.router',
    'ngMaterial',
    'loginModule',
    'userModule',
    'dashboardModel',
    'userEditModule',
    'userAddModule'
])

app.controller('AppController', function($scope, $mdSidenav, $timeout) {
    $scope.toggleLeft = function() {
        $timeout(function() {
            $mdSidenav('left').toggle();
        })

        console.log("adfdfsdfdf")
    };
})
app.value("REST_API_SERVER", 'http://localhost:5000/');
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/app/components/login/login.html',
            controller: 'LoginController'
        })

    .state('viewUser', {
            url: '/admin/users',
            templateUrl: '/app/components/User/user.html',
            controller: 'UserController'
        })
        //     .state('viewProduct', {
        //         url: '/product',
        //         templateUrl: '/app/admin/views/product.html',
        //         controller: 'productCtrl'
        //     })
        .state('welcome', {
            url: '/welcome',
            templateUrl: '/app/components/dashboard/dashboard.html',
            controller: 'DashboardController'
        })
        //.state("otherwise", { url: '/login' });

});