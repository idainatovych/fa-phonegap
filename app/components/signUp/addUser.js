'use strict';

function addUser(Restangular) {

    var addUserService = function () {
    };

    addUserService.prototype.post = function (user) {

        var users = Restangular.all('users');

        users.post(user);
    };

    return new addUserService()
}

module.exports = ['Restangular', addUser];