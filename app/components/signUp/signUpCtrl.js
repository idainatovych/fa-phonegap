'use strict';

function getUsersCtrl(addUserService) {

    var vm = this;

    vm.signUpInfo = {
        firstName : '',
        lastName : '',
        email: '',
        plainPassword : ''
    };

    vm.signUp = function () {
        addUserService.post(vm.signUpInfo);
    };

}

module.exports = ['addUserService', getUsersCtrl];