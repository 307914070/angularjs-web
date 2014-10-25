define(['Controllers'], function (Controllers) {
    Controllers.controller('AboutController', ['$scope', 'AboutService', function ($scope, AboutService) {
        $scope.text = 'Hello about.';
        $scope.get = AboutService.get();
    }]);
});