'use strict';

require('./components/schedule');

module.exports = angular.module('app', [
        'ionic',
        'schedule'
    ])
    .run(require('./app.main'))
    .config(require('./app.router'))
;