'use strict';

angular.module('projectSectoracademicoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('score', {
        url: '/score',
        templateUrl: 'app/psu/score/score.html',
        controller: 'ScoreCtrl'
      });
  });
