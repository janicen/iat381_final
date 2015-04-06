'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:FoodCtrl
 * @description
 * # FoodCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('FoodCtrl', function ($scope) {
    $scope.awesomeThings = [];

    	$scope.buttonAdd = function() {
            if($scope.txtcomment !==''){
                $scope.comment.push($scope.txtcomment);
                $scope.txtcomment = '';
            }
        };

        jQuery(function() {
            jQuery('.slider.touch').pagesSliderTouch();
            jQuery('.slider').pagesSlider();
        });
    });
