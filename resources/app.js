define(['angular'], function (angular) {

    var start = function () {
        var myApp = angular.module('myApp', []);
        angular.bootstrap(document, ['myApp']);
    }
    
    return {
        start: start
    };
});