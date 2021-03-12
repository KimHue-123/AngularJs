'use restrict';
var userEditModule = angular.module('userEditModule', [])

userEditModule.controller('UserEditController', function($scope, UserService, $mdDialog, idEdit) {
    $scope.userId = idEdit;
    $scope.closeDialog = function() {
        $mdDialog.hide();
    }

    function getInfor(userId) {
        UserService.getUserById(userId).then(function(res) {
            if (res.data) {
                $scope.infor = res.data.recordset[0];
            }
        })
    }


    $scope.saveInforEdit = function(userId, firstName, lastName, roles) {
        UserService.editUser(userId, firstName, lastName, roles).then(function(res) {
            if (res.data) {
                $scope.closeDialog();
                window.location.reload();
            }
        })

    }

    getInfor($scope.userId);



})