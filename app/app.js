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
		
		var $log = $injector.get('$log');
		var $rootScope = $injector.get('$rootScope');
		var $location = $injector.get('$location');
		$log.debug('mainApp : Run');
		$rootScope.isActive = function(url) {
			//console.log('$location : ', $location);
			//console.log('$location.path : ', $location.path());
			
			return ($location.path() === url);
		};
	}]);
	
	app.controller('ProductCtrl', ['$scope', '$injector', function($scope, $injector) {
		
		var $q = $injector.get('$q');
		var $http = $injector.get('$http');
		var $log = $injector.get('$log');
		$log.debug('ProductCtrl', arguments);
		$scope.messages = [];
		
		$scope.start = function() {
			$log.debug('start', arguments);
			
			$http.get('/ws/s1', {params: {a: 23, b: 'coucou'}}).then(function(response) {
				console.log('bleh');
				$log.debug('s1 success', response);
				$scope.messages.push('s1 success');
				return $q.all([$http.post('/ws/s2', {a: 12, b: {kiki: 'coucou'}}), $http.get('/ws/s3'), $http.get('/ws/s4')]);
			}).then(function(responses) {
				console.log('bleh blah', responses[0].data, responses[1].data, responses[2].data);
				$scope.messages.push('s2,s3,s4 success');
				return $http.get('/ws/s5');
			}).then(function(response) {
				console.log('blih', response.data);
				
				$scope.messages.push('s5 success');
			}).catch(function(error) {
				$log.error('Error', error);
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
