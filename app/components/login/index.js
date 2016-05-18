'use strict';

module.exports = angular.module('login', [])
    .service('currentUser', require('./currentUser'))
    .controller('loginCtrl', require('./loginCtrl'))
    .factory('currentUserId', require('./currentUserId'))