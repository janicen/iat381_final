'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
