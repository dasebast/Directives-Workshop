var app = angular.module('directiveWorkshop');

app.directive('pending', function() {

	return {
		restrict: 'A',
		scope: {
			request: '&'
		},
		link: function(scope, elem, attrs) {
			
		}
	}

});