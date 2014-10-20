/**
* »´æ÷require ≈‰÷√
*/
require.config({
    baseUrl: '../resources/',
    paths: {
        'jquery': 'libs/jquery/jquery-1.11.1.min',
        'angular': 'libs/angular/angular',
        'ngRoute': 'libs/angular/angular-route.min',
        'ngAnimate': 'libs/angular/angular-animate.min',
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
        },
        'ngRoute': {
            deps: ['angular']
        },
        'ngAnimate': {
            deps: ['angular']
        }
    }
});

define(['jquery', 'angular', 'ngRoute', 'ngAnimate', 'app'], function ($, angular) {
     
});