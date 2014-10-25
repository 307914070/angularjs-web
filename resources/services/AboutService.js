define(['Services'], function (Services) {
	Services.factory('AboutService', ['$http', function ($http) {
		return {
			get: function (){
				return 'service';
			}
		};
	}]);
});