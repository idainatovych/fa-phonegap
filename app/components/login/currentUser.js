'use strict';

function currentUser(Restangular) {


    var currentUser = function () {

        this.fetchUser();

    };

    currentUser.prototype.fetchUser = function () {

        this.data = Restangular.one('users', 32)

        this.user = this.data.get().$object;

    };

    currentUser.prototype.modifyUser = function () {

        this.user.plainPassword = 'password';

        Restangular.one('users', 32).customPUT(this.user);


    };

    currentUser.prototype.getUser = function () {

        return this.user

    };

    return new currentUser()
}

module.exports = ['Restangular', currentUser];