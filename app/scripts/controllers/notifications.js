'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:NotificationsCtrl
 * @description
 * # NotificationsCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('NotificationsCtrl', function ($scope) {
  	$scope.notifications = [
    	{'name': 'Chubby',
     	 'snippet': 'Sent you a trade'},
    	{'name': 'Fatty',
     	 'snippet': 'That was awesome!'},
    	{'name': 'Bubbly',
     	 'snippet': 'We should trade again =)'}
  	];
  });
