'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:GroupCtrl
 * @description
 * # GroupCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('GroupCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
