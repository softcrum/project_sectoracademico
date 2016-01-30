'use strict';

angular.module('projectSectoracademicoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('version', {
        url: '/version',
        templateUrl: 'app/about/version/version.html',
        controller: 'VersionCtrl'
      });
  });
