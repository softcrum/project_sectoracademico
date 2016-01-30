'use strict';

angular.module('projectSectoracademicoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: 'app/psu/index/index.html',
        controller: 'IndexCtrl'
      });
  });
