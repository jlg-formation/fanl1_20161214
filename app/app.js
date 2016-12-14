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
				templateUrl: 'tmpl/products.html',
				controller: 'ProductCtrl',
				controllerAs: '$ctrl'
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
	
	app.run(['$injector', function($injector){
		console.log('mainApp : Run');
		var $rootScope = $injector.get('$rootScope');
		var $location = $injector.get('$location');
		$rootScope.isActive = function(url) {
			//console.log('$location : ', $location);
			//console.log('$location.path : ', $location.path());
			
			return ($location.path() === url);
		};
	}]);
	
	app.controller('ProductCtrl', ['$scope', '$injector', function($scope, $injector) {
		console.log('ProductCtrl', arguments);
		var $q = $injector.get('$q');
		var $http = $injector.get('$http');
		
		$scope.messages = [];
		
		$scope.start = function() {
			console.log('start', arguments);
			
			$http.get('/ws/s1').then(function() {
				$scope.messages.push('s1 success');
				return $q.all([$http.get('/ws/s2'), $http.get('/ws/s3'), $http.get('/ws/s4')]);
			}).then(function(responses) {
				$scope.messages.push('s2,s3,s4 success');
				return $http.get('/ws/s5');
			}).then(function(response) {
				$scope.messages.push('s5 success');
			}).catch(function(error) {
				console.error('Error', error);
			});
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
