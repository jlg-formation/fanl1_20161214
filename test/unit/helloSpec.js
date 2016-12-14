(function() {
	'use strict';

	describe('test start button', function() {

		var scope, ctrl, $http;

		beforeEach(module('mainApp'));
		beforeEach(inject(function($rootScope, $controller, $injector) {
			scope = $rootScope.$new();
			ctrl = $controller('ProductCtrl', {$scope: scope});
			$http = $injector.get('$httpBackend');
			$http.when('GET', /\/ws\/s1.*/).respond({ msg:'toto' });
			$http.when('POST', '/ws/s2').respond({ msg:'toto2' });
			$http.when('GET', '/ws/s3').respond({ msg:'toto3' });
			$http.when('GET', '/ws/s4').respond({ msg:'toto4' });
			$http.when('GET', '/ws/s5').respond({ msg:'toto5' });
		}));
		afterEach(function() {
			 
				$http.verifyNoOutstandingExpectation();
				$http.verifyNoOutstandingRequest();
		});
			
		it('should call webservices', function() {
			$http.expectGET('/ws/s1?a=23&b=coucou').respond({ msg:'toto' });
			$http.expectPOST('/ws/s2', {a: 12, b: {kiki: 'coucou'}}).respond({ msg:'toto2' });
			$http.expectGET('/ws/s3').respond({ msg:'toto3' });
			$http.expectGET('/ws/s4').respond({ msg:'toto4' });
			//$http.expectGET('/ws/s5').respond({ msg:'toto5' }); // WTF
			
			scope.start();
					
			$http.flush(1);
			expect(scope.messages.length).toEqual(1);
			
		
			$http.flush(1);
			expect(scope.messages.length).toEqual(1);
		
			$http.flush(1);
			expect(scope.messages.length).toEqual(1);
		
			$http.flush(1);
			expect(scope.messages.length).toEqual(2);
						
		//	console.log($http.toString());
			
			$http.flush(1);
			expect(scope.messages.length).toEqual(3);
			
		
		});
	
	
	});
})();
