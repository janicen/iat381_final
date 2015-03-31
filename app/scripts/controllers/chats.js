'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:ChatsCtrl
 * @description
 * # ChatsCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('ChatsCtrl', function ($scope) {
    $scope.awesomeThings = [];

      	$scope.buttonAdd = function() {
            if($scope.txtcomment !==''){
                $scope.comment.push($scope.txtcomment);
                $scope.txtcomment = '';
            }
        };

  });
