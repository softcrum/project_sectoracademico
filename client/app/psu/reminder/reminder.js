'use strict';

angular.module('projectSectoracademicoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reminder', {
        url: '/reminder',
        templateUrl: 'app/psu/reminder/reminder.html',
        controller: 'ReminderCtrl'
      });
  });
