(function() {
	'use strict';

	var app = angular.module('ors-star', []);
	
	app.directive('orsStar', function() {
		return {
			restrict: 'E',
			scope: {
				n: '=note'
			},
			link: function(scope, element, attrs) {
				console.log('orsStar link', arguments);
				scope['3'] = 1;
				
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
						html += '<img src="ors-star/img/yellow_star.png" />';
					}
					for (var i = note; i < 5; i++) {
						html += '<img src="ors-star/img/white_star.png" />';
					}
					element.html(html);
				});
				
				
			}
		};
	});
})();
