'use strict';

angular.module('projectSectoracademicoApp.auth', [
  'projectSectoracademicoApp.constants',
  'projectSectoracademicoApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
