'use restrict';
var userAddModule = angular.module('userAddModule', [])

userAddModule.controller('UserAddController', function($scope, UserService, $mdDialog, $mdToast) {

    $scope.closeDialog = function() {
        $mdDialog.hide();
    }

    $scope.add = function(infor) {
        UserService.getUserByUsername(infor.userName).then(function(res) {
            var count = res.data.recordset.length;
            if (count) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('This username has been taken!')
                    // .position(auto)
                    .hideDelay(1000))
                $scope.infor = { userName: "", pass: "", firstName: "", lastName: "", roles: "" }

            } else {
                UserService.addUser(infor)
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Add user successfully!')
                    // .position(auto)
                    .hideDelay(1000))
                $scope.closeDialog();
                //window.location.reload();

            }
        })

    }
})