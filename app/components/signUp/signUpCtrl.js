'use strict';

function getUsersCtrl(addUser) {

    var vm = this;

    vm.signUpInfo = {
        firstName : '',
        lastName : '',
        email: '',
        plainPassword : ''
    };

    vm.signUp = function () {
        addUser.post(vm.signUpInfo);
    };

}

module.exports = ['addUser', getUsersCtrl];