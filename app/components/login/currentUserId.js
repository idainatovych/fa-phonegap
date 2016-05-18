'use strict';

function currentUserId($window) {

    this.id = $window.localStorage.getItem('id') || false;

    return this.id
}

module.exports = ['$window', currentUserId];