'use strict';

require('./components/schedule');
require('./components/translate');
require('./components/account');
require('./components/signUp');
require('./components/login');
require('restangular-umd');
require('lodash');


module.exports = angular.module('app', [
        'ionic',
        'schedule',
        'account',
        'translate',
        'signUp',
        'login',
        'restangular'
    ])

    .run(require('./app.main'))
    .config(require('./app.router'))
;
