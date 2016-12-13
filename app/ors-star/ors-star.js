(function() {
	'use strict';

	var app = angular.module('ors-star', []);
	
	app.directive('orsStar', function() {
		return {
			restrict: 'E',
			link: function(scope, element, attrs) {
				console.log('orsStar link', arguments);
				
				scope.$watch('myNote', function() {
					var html = '';
					var note = attrs.note;
					console.log('note', note);
					note = (note === undefined || note === '') ? 2 : note;
					note = (scope[note] === undefined) ? note : scope[note];
					note = Number(note);
					note = (isNaN(note)) ? 2 : note;
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
