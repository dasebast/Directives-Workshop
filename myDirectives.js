var app = angular.module('directiveWorkshop');

app.directive('pending', function($q) {

	return {
		restrict: 'A',
		scope: {
			request: '&'
		},
		// templateUrl: 'myDirectives.html',
		link: function(scope, elem, attrs) {
			var spinnerIcon = angular.element('<img style="height: 25px" src="spinner.GIF" />')
			spinnerIcon.hide();
			elem.after(spinnerIcon);

			var invokeRequest = function () {
				var dfd = $q.defer();

				dfd.resolve(scope.request());

				return dfd.promise
			}

			elem.click(function(){
				elem.hide();
				spinnerIcon.show();
				invokeRequest().then(function(){
					setTimeout(function(){
						elem.show();
						spinnerIcon.hide();
					}, 2000);
				});
				
			})
					
		},
		
	}

});

app.directive('notify', function() {
	return {
		restrict: 'A',
		scope: {
			title: '=',
			body: '=',
			icon: '@'
		},
		link: function(scope, elem, attrs) {
			console.log(scope);
			var Notification = window.Notification || window.mozNotification || window.webkitNotification;
		    Notification.requestPermission(function (permission) { });

			var show = function() {
				var notification = new Notification(scope.title, { body: scope.body })
			}

			elem.click(function() {
				debugger;
				show();
		                //console.log(permission);
		       	
		                
		     }); //close elem.click

			
			

		} //close link
	} //close return

});