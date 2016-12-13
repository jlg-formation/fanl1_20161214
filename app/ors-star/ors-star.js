(function() {
	'use strict';

	var app = angular.module('ors-star', []);
	
	app.directive('orsStar', ['$compile', function($compile) {
		return {
			restrict: 'E',
			scope: {
				n: '=?note'
			},
			link: function(scope, element, attrs) {
				console.log('orsStar link', arguments);
				
				scope.update = function(note) {
					console.log('update', arguments);
					scope.n = note;
				};
				
				scope.$watch('n', function() {
					var html = '';
					var note = scope.n;
					
					console.log('note', note);
					
					note = (note === undefined || note === '') ? 2 : note;
					
					note = Number(note);
					note = (isNaN(note)) ? 2 : note;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					
					for (var i = 0; i < note; i++) {
						html += '<img ng-click="update(' + i + ')" src="ors-star/img/yellow_star.png" />';
					}
					for (var i = note; i < 5; i++) {
						html += '<img ng-click="update(' + (i+1) + ')" src="ors-star/img/white_star.png" />';
					}
					element.html(html);
					var fn = $compile(element.contents());
					//console.log('fn', fn.toString());
					fn(scope);
					
				});
				
				
			}
		};
	}]);
})();
