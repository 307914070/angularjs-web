/**
* require conifg
*/
require.config({
    baseUrl: './resources/',
    paths: {
        'jquery': 'libs/jquery/jquery-1.11.1.min',
        'angular': 'libs/angular/angular',
        'ngRoute': 'libs/angular/angular-route.min',
        'ngAnimate': 'libs/angular/angular-animate.min',
        'underscore': 'libs/underscore/underscore.min',        
        'Controllers': 'controllers/Controllers',
        'Services': 'services/Services',
        'AboutController': 'controllers/AboutController',
        'AboutService': 'services/AboutService'
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

define(['jquery',
        'angular',
        'ngRoute',
        'ngAnimate',
        'Controllers',
        'Services',
        'AboutController',
        'AboutService'],
    function ($, angular) {
		var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'Controllers', 'Services']);    
	    
	    app.controller('IndexController', ['$scope', '$http', function ($scope, $http) {
	    	$http.get('./mock/menu.json').success(function (resDate) {
	    		$scope.menus = resDate.data;
	    	});
	    }]);
	    
	    app.config(['$routeProvider', function ($routeProvider) {
	    	$routeProvider
	    	.when('/about', {
	    		templateUrl: 'resources/view/about.tpl',
	    		controller: 'AboutController'
	    	})
	    	.otherwise({
	    		redirectTo: '/'
	    	});
	    }]);
	    
	    angular.bootstrap(document, ['myApp']);
});