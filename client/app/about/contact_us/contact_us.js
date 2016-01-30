'use strict';

angular.module('projectSectoracademicoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact_us', {
        url: '/contact_us',
        templateUrl: 'app/about/contact_us/contact_us.html',
        controller: 'ContactUsCtrl'
      });
  });
