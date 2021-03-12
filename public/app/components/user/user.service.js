angular.module('userModule').factory('UserService',
    function($http, REST_API_SERVER) {
        // var userList = [];
        // var checkLoad = true;
        return {
            getListUser: function() {
                let api = REST_API_SERVER + 'userList';
                return $http.get(api);
            },

            editUser: function(userId, firstName, lastName, roles) {
                let api = REST_API_SERVER + 'updateDataTest';
                return $http.post(api, JSON.stringify({ id: userId, firstName: firstName, lastName: lastName, roles: roles }))
            },

            getUserById: function(userId) {
                let api = REST_API_SERVER + 'getDataTestById';
                return $http.post(api, JSON.stringify({ id: userId }))
            },

            deleteUser: function(userId) {
                let api = REST_API_SERVER + 'deleteDataTest'
                return $http.post(api, JSON.stringify({ id: userId }));
            },

            addUser: function(user) {
                let api = REST_API_SERVER + 'addUser'
                return $http.post(api, JSON.stringify({
                    userName: user.userName,
                    pass: user.pass,
                    roles: user.roles,
                    firstName: user.firstName,
                    lastName: user.lastName
                }))
            },
            getUserByUsername: function(userName) {
                    let api = REST_API_SERVER + 'getByUserName';
                    return $http.post(api, JSON.stringify({ userName: userName }))
                }
                // getterUserList: function() {
                //     return userList
                // },
                // setterUserList: function(list) {
                //     for (let i = 0; i < list.length; i++) {
                //         userList[i] = list[i];
                //     }
                // },
                // getterCheckLoad: function() {
                //     return checkLoad;
                // },
                // setterCheckLoad: function(flag) {
                //     checkLoad = flag;
                // }
        }

    })