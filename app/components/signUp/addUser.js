'use strict';

function addUser(Restangular, currentUser) {

    var addUserService = function () {
    };

    addUserService.prototype.post = function (user) {

        var users = Restangular.all('users');

        users.post(user).then(function(res){
            currentUser.setId(res['@id'].replace(/\/app_dev.php\/api\/v1\/users\//gi, ''));
        });
    };

    return new addUserService()
}

module.exports = ['Restangular', 'currentUser', addUser];