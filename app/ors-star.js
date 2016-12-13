(function() {
	'use strict';

	var app = angular.module('ors-star', []);
	
	app.directive('orsStar', function() {
		return {
			restrict: 'E',
			link: function() {
				console.log('orsStar link', arguments);
				
			}
		};
	});

})();
