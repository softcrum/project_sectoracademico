'use strict';

angular.module('projectSectoracademicoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('team', {
        url: '/team',
        templateUrl: 'app/about/team/team.html',
        controller: 'TeamCtrl'
      });
  });
