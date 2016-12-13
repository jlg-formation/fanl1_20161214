(function() {
	'use strict';

	var app = angular.module('mainApp', ['ors-star', 'ngRoute']);
	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider
			.html5Mode(true);

		$routeProvider
			.when('/', {
				templateUrl: 'tmpl/home.html'
			})
			.when('/products', {
				templateUrl: 'tmpl/products.html'
			})
			.when('/services', {
				templateUrl: 'tmpl/services.html'
			})
			.when('/contact', {
				templateUrl: 'tmpl/contact.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
	
	app.run(['$rootScope', '$location', function($rootScope, $location){
		console.log('mainApp : Run');
		$rootScope.isActive = function(url) {
			console.log('$location : ', $location);
			console.log('$location.path : ', $location.path());
			
			return ($location.path() === url);
		};
	}]);
	
	app.directive('orsHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-header.html'
		};
	});
	
	app.directive('orsBody', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-body.html'
		};
	});
	
	app.directive('orsFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-footer.html'
		};
	});
})();
