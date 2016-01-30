'use strict';

angular.module('projectSectoracademicoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('info', {
        url: '/info',
        templateUrl: 'app/psu/info/info.html',
        controller: 'InfoCtrl'
      });
  });
