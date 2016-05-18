'use strict';

function currentUser(Restangular, $window, currentUserId) {


    var currentUser = function () {

        if (currentUserId){
            this.fetchUser();
        }

    };

    currentUser.prototype.setId = function(id){

        if(!currentUserId){
            $window.localStorage.setItem('id', id.toString() );
            currentUserId = $window.localStorage.getItem('id');
            this.fetchUser();
        }

    };

    currentUser.prototype.fetchUser = function () {

        this.user = Restangular.one('users', currentUserId).get().$object;

    };

    currentUser.prototype.modifyUser = function () {

        this.user.plainPassword = 'password';
        if(!this.user.information){
            delete this.user.information;
        }
        Restangular.one('users', currentUserId).customPUT(this.user);

    };

    currentUser.prototype.getUser = function () {

        return this.user

    };

    return new currentUser()
}

module.exports = ['Restangular', '$window', 'currentUserId', currentUser];