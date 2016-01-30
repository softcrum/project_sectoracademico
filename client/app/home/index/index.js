'use strict';

angular.module('projectSectoracademicoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: 'app/home/index/index.html',
        controller: 'IndexCtrl'
      });
  });
