'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('PostCtrl', function ($scope) {
    $scope.comment = [];
        $scope.buttonAdd = function() {
            if($scope.txtcomment !==''){
                $scope.comment.push($scope.txtcomment);
                $scope.txtcomment = '';
            }
        };
  });
