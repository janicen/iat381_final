'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
angular
  .module('myappApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'flow'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/group', {
        templateUrl: 'views/group.html',
        controller: 'GroupCtrl'
      })
      .when('/trades', {
        templateUrl: 'views/trades.html',
        controller: 'TradesCtrl'
      })
      .when('/bookmarks', {
        templateUrl: 'views/bookmarks.html',
        controller: 'BookmarksCtrl'
      })
      .when('/chefs', {
        templateUrl: 'views/chefs.html',
        controller: 'ChefsCtrl'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/notifications', {
        templateUrl: 'views/notifications.html',
        controller: 'NotificationsCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
