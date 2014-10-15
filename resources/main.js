/**
* »´æ÷require ≈‰÷√
*/
requirejs.config({
    baseUrl: '/angularjs/resources/',
    paths: {
        'jquery': 'libs/jquery/jquery-1.11.1.min',
        'angular': 'libs/angular/angular.min',
        'underscore': 'libs/underscore/underscore.min'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        }
    }
});

define(['jquery', 'app'], function ($, app) {
    app.start();
});