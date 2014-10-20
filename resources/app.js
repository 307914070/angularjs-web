define(['angular'], function (angular) {

    var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);
    app.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
            .when('/home', {
                templateUrl: 'resources/view/about.tpl',
                controller: ''
            });
    }]).controller('IndexController',['$scope', '$http', function ($scope, $http) {
        $http.get('../mock/menu.json').success(function (data, status) {
            $scope.menus = data.data;
        });
    }]);
});