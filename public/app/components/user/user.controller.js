'use restrict';
var userModule = angular.module('userModule', [])

userModule.controller('UserController', function($scope, UserService, $mdDialog) {
    $scope.userList = [];

    function loadListuser() {
        UserService.getListUser().then(function(res) {
            for (let i = 0; i < res.data.recordset.length; i++) {
                $scope.userList[i] = res.data.recordset[i];
            }
        })
    }
    loadListuser();
    $scope.editUser = function(userId, $event) {
        var parentEl = angular.element(document.body);
        $mdDialog.show({
            parent: parentEl,
            targetEvent: $event,
            templateUrl: '/app/components/user/user-edit/user-edit.html',
            controller: 'UserEditController',
            locals: { idEdit: userId }
        });
    }

    $scope.deleteUser = function(userId, ev) {
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete?')
            // .textContent('All of the banks have agreed to forgive you your debts.')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Delete')
            .cancel('Cancle');

        $mdDialog.show(confirm).then(function() {
            UserService.deleteUser(userId).then(function(res) {
                window.location.reload();
            })
        }, function() {
            // $scope.status = 'You decided to keep your debt.';
        });

    }

    $scope.addUser = function($event) {
        var parentEl = angular.element(document.body);
        $mdDialog.show({
            parent: parentEl,
            targetEvent: $event,
            templateUrl: '/app/components/user/user-add/user-add.html',
            controller: 'UserAddController'
        });
    }

})