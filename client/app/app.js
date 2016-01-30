'use strict';

angular.module('projectSectoracademicoApp', [
  'projectSectoracademicoApp.auth',
  'projectSectoracademicoApp.admin',
  'projectSectoracademicoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
