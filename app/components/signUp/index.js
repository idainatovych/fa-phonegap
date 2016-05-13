'use strict';

module.exports = angular.module('signUp', [])
    .controller('signUpCtrl', require('./signUpCtrl'))
    .service('addUser', require('./addUser'))
