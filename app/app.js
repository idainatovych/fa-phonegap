'use strict';

require('./components/schedule');
require('./components/translate');
require('./components/account');


module.exports = angular.module('app', [
        'ionic',
        'schedule',
        'account',
        'translate'
    ])
    .run(require('./app.main'))
    .config(require('./app.router'))
;